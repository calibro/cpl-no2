import { writable, readable } from 'svelte/store';
import { scaleSequential } from 'd3-scale';
import { interpolatePlasma } from 'd3-scale-chromatic';

export const bboxGrid = writable(null);
export const selectedAddress = writable(null);

const colorDomain = [20, 60];
export const colorScale = readable(
	scaleSequential((t) => interpolatePlasma(1 - t))
		.domain(colorDomain)
		.clamp(true)
);
