<script>
	import AddressSearch from '$lib/AddressSearch.svelte';
	import { selectedAddress } from '$lib/stores';
	import Box from '$lib/Box.svelte';
	import { base } from '$app/paths';

	const defaultAddress = {
		address: 'Piazza del Duomo, Duomo, Municipio 1, Milano, Lombardia, Italia',
		feature: {
			geometry: { coordinates: [9.190666799999999, 45.46388775], type: 'Point' },
			type: 'Feature'
		},
		id: 463529462,
		readableAddress: 'Piazza del Duomo',
		type: 'address'
	};

	const seelctDefaultAddress = () => {
		selectedAddress.set(defaultAddress);
	};
</script>

<div
	class="w-100 h-100 bg-indigo bg-opacity-75 d-flex align-items-center justify-content-center overflow-hidden"
>
	<div class="infoContainer bg-indigo rounded-md p-3 d-flex flex-column">
		<Box>
			<h6 class="mb-3 text-uppercase">NO<sub>2</sub>, No grazie!</h6>

			<p class="question fs-3 lh-sm">Quanto biossido di azoto respiri a Milano?</p>

			<p>
				Il biossido di azoto (NO<sub>2</sub>) che proviene dai veicoli diesel che percorrono le vie
				di Milano causa la morte prematura di <b>1507</b> persone ogni anno nel capoluogo lombardo.
			</p>
			<p class="mb-0">
				Scopri la concentrazione annua di NO<sub>2</sub> inserende un indirizzo a Milano (dove abiti
				per esempio) o selezionando una scuola.
			</p>
		</Box>
		<Box>
			<AddressSearch id="intro_address" />
			<button on:click={seelctDefaultAddress} class="btn btn-light rounded-pill mt-3 w-100">
				...o esplora la mappa
			</button>
		</Box>

		<Box>
			<div class="d-flex align-items-center">
				<div class="text-uppercase me-2 fs-7 fw-bold flex-grow-0 flex-shrink-0">un progetto di</div>
				<a
					href="https://www.cittadiniperlaria.org/"
					role="button"
					class="btn btn-light rounded-pill"
					target="_blank"
					><img src={`${base}/logo.png`} class="img-fluid" alt="logo cittadini per l'aria" /></a
				>
			</div>
		</Box>
	</div>
</div>

<style>
	.infoContainer {
		width: 100%;
		overflow-y: auto;
		height: 100%;
	}

	.question {
		background: linear-gradient(267.15deg, #f6e349 11.12%, #f1a24d 44.05%, #cc51eb 75.64%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	@media (min-width: 768px) {
		.infoContainer {
			width: 350px;
			height: auto;
			max-height: 100%;
		}
	}
</style>
