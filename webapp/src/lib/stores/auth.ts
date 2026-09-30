import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import PocketBase from 'pocketbase';

// Client dedicato al pannello: la sessione è salvata nel localStorage del browser
const pb = browser ? new PocketBase(import.meta.env.VITE_PB_URL) : null;

function createAuthStore() {
	const { subscribe, set } = writable(pb?.authStore.isValid ?? false);
	pb?.authStore.onChange(() => set(pb.authStore.isValid));

	return {
		subscribe,
		get isValid() {
			return pb?.authStore.isValid ?? false;
		},
		get user() {
			return pb?.authStore.record ?? null;
		},
		login: async (email: string, password: string) => {
			return pb!.collection('users').authWithPassword(email, password);
		},
		logout: () => {
			pb?.authStore.clear();
		}
	};
}

export const auth = createAuthStore();

let lastRefresh = 0;

export async function getAdminClient() {
	if (pb?.authStore.isValid && Date.now() - lastRefresh > 10 * 60 * 1000) {
		lastRefresh = Date.now();
		// rinnova il token se sta per scadere; se non è più valido si torna al login
		try {
			await pb.collection('users').authRefresh({ requestKey: null });
		} catch {
			pb.authStore.clear();
		}
	}
	return pb;
}
