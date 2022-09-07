<script>
	import { selectedAddress } from '$lib/stores';
	import { tweened } from 'svelte/motion';
	export let value;

	$: searchMode = $selectedAddress.type;

	const percentage0 = tweened(undefined);
	const percentage1 = tweened(undefined);
	const tValue = tweened(undefined);

	$: percentages = {
		percentage0: $percentage0,
		percentage1: $percentage1
	};

	const deseases = {
		address: {
			'di mortalità': 4,
			'di infarto': 3
		},
		grid: { 'di mortalità': 4, 'di infarto': 3 },
		school: {
			'di asma nei bambini e giovani': 12,
			'di infezioni respiratorie acute': 9
		}

		// 'di incidenza di asma negli adulti': 10
	};

	$: deseaseKeys = Object.keys(deseases[searchMode]);

	$: {
		percentage0.set(Math.floor(value / 10) * deseases[searchMode][deseaseKeys[0]]);
		percentage1.set(Math.floor(value / 10) * deseases[searchMode][deseaseKeys[1]]);
	}

	$: tValue.set(value);
</script>

<p class="fs-5 mb-0">
	L'esposizione a <b>{Math.round($tValue)} µg/m3</b> di NO<sub>2</sub> comporta un aumento del
	rischio {#each deseaseKeys as desease, i}
		{desease}
		del <b>{Math.round(percentages['percentage' + i])}%</b>
		{#if i === 0} {'e '} {:else}.{/if}
	{/each}
</p>
