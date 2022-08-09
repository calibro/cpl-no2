<script>
	import AddressSearch from '$lib/AddressSearch.svelte';
	import Box from '$lib/Box.svelte';
</script>

<div class="w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center p-3">
	<div class="infoContainer bg-indigo rounded p-3">
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
		</Box>
		<Box>
			<div class="d-flex align-items-center">
				<div class="text-uppercase me-2 fs-7 fw-bold flex-grow-0 flex-shrink-0">un progetto di</div>
				<a
					href="https://www.cittadiniperlaria.org/"
					role="button"
					class="btn btn-light rounded-pill"
					target="_blank"
					><img src="/logo.png" class="img-fluid" alt="logo cittadini per l'aria" /></a
				>
			</div>
		</Box>
	</div>
</div>

<style>
	.infoContainer {
		width: 100%;
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
		}
	}
</style>
