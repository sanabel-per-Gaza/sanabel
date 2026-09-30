import { redirect } from '@sveltejs/kit';

// Vecchio indirizzo: la sezione ora si chiama "Cosa facciamo" (/attivita)
export const load = () => {
	redirect(301, '/attivita');
};
