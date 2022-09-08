import { writable, readable } from 'svelte/store';
import { scaleSequential, scaleLinear } from 'd3-scale';
import { interpolateWarm } from 'd3-scale-chromatic';
import { onDestroy } from 'svelte';

export const bboxGrid = writable(null);
export const gridBoundary = writable(null);
export const selectedAddress = writable(null);
export const searchMode = writable('address');
export const googleGeocoder = writable(false);

const colorDomain = [0, 60];
const reScale = scaleLinear().domain([0.16, 1.0]).range([0.0, 1.0]);
export const colorScale = readable(
	scaleSequential((t) => {
		if (t < 0.16) {
			return interpolateWarm(1);
		} else {
			return interpolateWarm(1 - reScale(t));
		}
	})
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
