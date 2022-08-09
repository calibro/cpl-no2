import { writable, readable } from 'svelte/store';
import { scaleSequential } from 'd3-scale';
import { interpolatePlasma, interpolateWarm } from 'd3-scale-chromatic';
import { onDestroy } from 'svelte';

export const bboxGrid = writable(null);
export const selectedAddress = writable(null);

const colorDomain = [0, 60];
export const colorScale = readable(
	scaleSequential((t) => interpolateWarm(1 - t))
		.domain(colorDomain)
		.clamp(true)
);

export const mediaQuery = (query, defaultState = false) => {
	const { set, subscribe } = writable(defaultState);

	if (typeof window !== 'undefined') {
		const mql = window.matchMedia(query);

		const onChange = () => set(!!mql.matches);
		mql.addEventListener('change', onChange);
		set(mql.matches);

		onDestroy(() => mql.removeEventListener('change', onChange));
	}

	return { subscribe };
};
