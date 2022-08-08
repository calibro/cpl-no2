<script>
	import AddressSearch from '$lib/AddressSearch.svelte';
</script>

<div class="w-100 h-100 bg-dark bg-opacity-25 d-flex align-items-center justify-content-center">
	<div class="infoContainer bg-white rounded p-3">
		<h4 class="title text-uppercase">NO<sub>2</sub>, No grazie!</h4>
		<div class="text-body">
			<hr class="w-25 opacity-100" />
		</div>

		<p class="fs-3 lh-sm">Scopri quanta NO<sub>2</sub> respiri a Milano.</p>
		<div class="text-body">
			<hr class="w-25 opacity-100" />
		</div>
		<p>
			Il biossido di azoto (NO<sub>2</sub>) che proviene dai veicoli diesel che percorrono le vie di
			Milano causa la morte prematura di 1507 persone ogni anno nel capoluogo lombardo.
		</p>
		<p>
			Scopri la concentrazione annua di NO<sub>2</sub> inserende un indirizzo a Milano (dove abiti per
			esempio) o selezionando una scuola.
		</p>
		<AddressSearch id="intro_address" />
	</div>
</div>

<style>
	.infoContainer {
		width: 350px;
	}

	.title {
		font-weight: 900;
	}
</style>
