import { writable } from 'svelte/store';

export const showJoinForm = writable(false);

export const openJoinForm = () => {
	showJoinForm.set(true);
	// Prevent body scroll when modal is open
	if (typeof document !== 'undefined') {
		document.body.style.overflow = 'hidden';
	}
};

export const closeJoinForm = () => {
	showJoinForm.set(false);
	// Restore body scroll
	if (typeof document !== 'undefined') {
		document.body.style.overflow = 'auto';
	}
};
