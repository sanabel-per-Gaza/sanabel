import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let pb: any = null;

async function getPb() {
	if (!browser) return null;
	if (!pb) {
		const PocketBase = (await import('pocketbase')).default;
		pb = new PocketBase(import.meta.env.VITE_PB_URL);
	}
	return pb;
}

function createAuthStore() {
	const { subscribe, set } = writable(false);

	if (browser) {
		getPb().then(p => {
			if (p) {
				set(p.authStore.isValid);
				p.authStore.onChange(() => set(p.authStore.isValid));
			}
		});
	}

	return {
		subscribe,
		get isValid() { return pb?.authStore?.isValid ?? false; },
		get user() { return pb?.authStore?.model ?? null; },
		login: async (email: string, password: string) => {
			const p = await getPb();
			return p!.collection('users').authWithPassword(email, password);
		},
		logout: () => {
			pb?.authStore?.clear();
		}
	};
}

export const auth = createAuthStore();

export async function getAdminClient() {
	return getPb();
}
