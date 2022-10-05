<script>
	import AddressSearch from '$lib/AddressSearch.svelte';
	import { selectedAddress } from '$lib/stores';
	import Box from '$lib/Box.svelte';
	import { base } from '$app/paths';
	export let schools;

	const defaultAddress = {
		address: 'Piazza del Duomo, Duomo, Municipio 1, Milano, Lombardia, Italia',
		feature: {
			geometry: { coordinates: [9.189292, 45.464693], type: 'Point' },
			type: 'Feature'
		},
		id: 463529462,
		readableAddress: 'Piazza del Duomo',
		type: 'address'
	};

	const selectDefaultAddress = () => {
		selectedAddress.set(defaultAddress);
	};
</script>

<div
	class="w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center overflow-hidden"
>
	<div class="infoContainer bg-dark-gray rounded-md p-3 d-flex flex-column">
		<Box>
			<h6 class="mb-3 text-uppercase">Sai cosa respiri?</h6>

			<p class="question fs-1 lh-sm fw-bold">
				Scopri quanto NO<sub class="questionNumber">2</sub> respiri a Milano!
			</p>
			<p class="mb-0">
				Scopri la concentrazione annua di NO<sub>2</sub> inserendo il tuo indirizzo a Milano, quello
				di dove lavori, o selezionando una scuola.
			</p>
		</Box>
		<Box>
			<AddressSearch id="intro_address" {schools} />
		</Box>
		<Box>
			<button on:click={selectDefaultAddress} class="btn btn-dark-gray rounded-pill w-100">
				oppure esplora la mappa
			</button>
		</Box>

		<Box>
			<p>
				Il biossido di azoto (NO<sub>2</sub>), che proviene dai veicoli diesel che percorrono le vie
				di Milano, causa la morte prematura di <b>1500</b> persone ogni anno nel capoluogo lombardo.
			</p>
			<p class="mb-0 fs-7 text-decoration-underline">
				<a
					class="text-body"
					href="https://www.cittadiniperlaria.org/milano-2020-sai-cosa-respiri/#crediti"
					target="_blank"
				>
					Forniamo al pubblico la stima più dettagliata sulle concentrazioni di inquinamento da
					traffico a Milano
				</a>
			</p>
		</Box>
	</div>
</div>

<style>
	.infoContainer {
		width: 100%;
		overflow-y: auto;
		max-height: 100%;
	}

	.question {
		background: linear-gradient(
			90deg,
			#f6e349 11.12%,
			#f1a24d 34.05%,
			#cc51eb 55.64%,
			#71196e 65%,
			#10092d 75%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		/* text-fill-color: transparent; */
	}

	.questionNumber {
		background: linear-gradient(0deg, #71196e 0%, #10092d 10%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	@media (min-width: 768px) {
		.infoContainer {
			width: 430px;
			height: auto;
		}
	}
</style>
