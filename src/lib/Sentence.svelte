<script>
	import { tweened } from 'svelte/motion';
	export let value;

	const percentage = tweened(undefined);
	const tValue = tweened(undefined);

	const deseases = {
		'di mortalità': 4,
		'di asma nei bambini e giovani (0-18 anni)': 12,
		'di infezioni respiratorie acute nei bambini e giovani': 9,
		'di incidenza di asma negli adulti': 10
	};

	const deseaseKeys = Object.keys(deseases);
	let rn = Math.floor(Math.random() * deseaseKeys.length);
	let desease = deseaseKeys[rn];

	$: {
		// rn = Math.floor(Math.random() * deseaseKeys.length);
		// desease = deseaseKeys[rn];
		percentage.set(Math.floor(value / 10) * deseases[desease]);
	}

	$: tValue.set(value);
</script>

<p>
	L'esposizione a {Math.round($tValue)} µg/m3 di N0<sub>2</sub> comporta un aumento del rischio {desease}
	del {Math.round($percentage)}%.
</p>
