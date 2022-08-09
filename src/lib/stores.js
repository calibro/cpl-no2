import { writable, readable } from 'svelte/store';
import { scaleSequential } from 'd3-scale';
import { interpolatePlasma, interpolateWarm } from 'd3-scale-chromatic';

export const bboxGrid = writable(null);
export const selectedAddress = writable(null);

const colorDomain = [0, 60];
export const colorScale = readable(
	scaleSequential((t) => interpolateWarm(1 - t))
		.domain(colorDomain)
		.clamp(true)
);
