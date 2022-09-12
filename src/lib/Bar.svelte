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
		{ value: 10, text: 'Soglia annua a tutela della salute' },
		{ value: 40, text: 'Limite medio annuo di legge' }
	];

	$: tValue.set(value);
</script>

<div class="barContainer w-100">
	<div class="d-flex justify-content-between position-relative">
		{#each $colorScale.domain() as domain}
			<div class="fs-7">{domain}</div>
		{/each}
		{#each annotations as annotation}
			<div
				style="margin-left:{marginScale(annotation.value)}%;"
				class="annotationValue position-absolute fs-7"
			>
				{annotation.value}
			</div>
		{/each}
	</div>
	<div class="w-100 position-relative">
		<div
			class="bg-gradient rounded-pill overflow-hidden position-absolute w-100 d-flex"
			bind:clientWidth={bgW}
		>
			{#each steps as step}
				<div class="step h-100" style="background-color:{$colorScale(localScale(step))};" />
			{/each}
		</div>
		{#each annotations as annotation}
			<div
				style="margin-left:{marginScale(annotation.value)}%;"
				class="annotationBar bg-dark border border-white position-absolute h-100"
			/>
		{/each}
		<div
			style="margin-left:{marginScale(value)}%;color:{$colorScale(value)};"
			class="value border border-dark-gray fw-bold rounded-circle bg-white d-flex align-items-center justify-content-center position-relative"
		>
			{Math.round($tValue)}
		</div>
	</div>
	<div class="w-100 position-relative mt-2 d-flex">
		{#each annotations as annotation, i}
			<div
				style="margin-left:{i ? 0 : marginScale(annotation.value)}%;left:{i
					? marginScale(annotation.value)
					: 0}%;"
				class="annotationText fs-7 text-center lh-1"
				class:position-absolute={i > 0}
			>
				{annotation.text}
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

	.bg-gradient {
		height: 20px;
		top: 50%;
		transform: translateY(-50%);
	}

	.step {
		width: 1px;
	}

	.value,
	.annotationValue {
		transform: translateX(-50%);
	}

	.annotationBar {
		width: 3px;
	}

	.annotationText {
		max-width: 145px;
		transform: translateX(-50%);
	}
</style>
