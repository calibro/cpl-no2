<script>
	import { tweened } from 'svelte/motion';
	import { colorScale } from '$lib/stores';
	import { scaleLinear } from 'd3-scale';
	import { range } from 'd3-array';
	export let value;

	let bgW;
	const tValue = tweened(undefined);
	$: steps = range(bgW);
	$: localScale = scaleLinear().domain([0, bgW]).range($colorScale.domain());
	$: marginScale = scaleLinear().range([0, 100]).domain($colorScale.domain());

	const annotations = [
		{ value: 10, text: "Soglia dell'OMS per la tutela della salute" },
		{ value: 40, text: 'Limite di legge al momento attuale' }
	];

	$: tValue.set(value);
</script>

<div class="barContainer w-100">
	<div class="d-flex justify-content-between">
		{#each $colorScale.domain() as domain}
			<div><small>{domain}</small></div>
		{/each}
	</div>
	<div class="w-100 rounded-pill position-relative overflow-hidden">
		<div class="bg-gradient position-absolute w-100 h-100 d-flex" bind:clientWidth={bgW}>
			{#each steps as step}
				<div class="step h-100" style="background-color:{$colorScale(localScale(step))};" />
			{/each}
		</div>
		{#each annotations as annotation}
			<div
				style="margin-left:{marginScale(annotation.value)}%;"
				class="annotationBar bg-white position-absolute h-100"
			/>
		{/each}
		<div
			style="margin-left:{marginScale(value)}%;color:{$colorScale(value)};"
			class="value my-1 fw-bold rounded-circle bg-white d-flex align-items-center justify-content-center position-relative"
		>
			{Math.round($tValue)}
		</div>
	</div>
	<div class="w-100 position-relative mt-1 mb-5">
		{#each annotations as annotation}
			<div
				style="margin-left:{marginScale(annotation.value)}%;"
				class="annotationText position-absolute text-center lh-1"
			>
				<small>{annotation.text}</small>
			</div>
		{/each}
	</div>
</div>

<style>
	.value {
		width: 35px;
		height: 35px;
		transition: margin-left 0.3s linear;
	}

	.step {
		width: 1px;
	}

	.value {
		transform: translateX(-50%);
	}

	.annotationBar {
		width: 1px;
	}

	.annotationText {
		width: 150px;
		transform: translateX(-50%);
	}
</style>
