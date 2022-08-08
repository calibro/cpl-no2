<script>
	import { selectedAddress } from '$lib/stores';
	import { page } from '$app/stores';
	import Bar from '$lib/Bar.svelte';
	import TwitterButton from '$lib/TwitterButton.svelte';
	import FacebookButton from '$lib/FacebookButton.svelte';
	import Sentence from '$lib/Sentence.svelte';

	const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
	const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

	const resetPOI = () => {
		selectedAddress.set(null);
	};

	$: text = `A #Milano in ${$selectedAddress?.readableAddress}, c'è una concentrazione media annua di ${$selectedAddress?.value} µg/m3 di NO2. Scopri quanta NO2 respiri a Milano con la mappa di Cittadini per l'aria!`;
	$: url = $page.url.href;
	const hashtags = 'inquinamento,sala';
	const via = 'citizensforair';

	$: googleSatelliteUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${$selectedAddress?.feature.geometry.coordinates[1]},${$selectedAddress?.feature.geometry.coordinates[0]}&zoom=19&scale=2&size=400x400&maptype=satellite&key=${GOOGLE_API_KEY}&format=png`;
	$: streetviewUrl = `https://maps.googleapis.com/maps/api/streetview?size=400x400&key=${GOOGLE_API_KEY}&location=${$selectedAddress?.feature.geometry.coordinates[1]},${$selectedAddress?.feature.geometry.coordinates[0]}`;
</script>

<div class="rightPanel w-100 h-100 bg-white rounded shadow-sm p-3">
	<!-- <div class="d-flex">
		<button
			aria-label="close"
			on:click={resetPOI}
			class="closeBtn btn btn-light ms-auto rounded-circle p- d-flex align-items-center justify-content-center"
		>
			<i class="bi bi-x-lg" />
		</button>
	</div> -->
	<div>
		<p class="m-0">
			<small class="text-uppercase text-black-50"
				>concentrazione di NO<sub>2</sub>
				<span class="text-lowercase">(µg/m<sup>3</sup>)</span></small
			>
		</p>
		<p>
			<Bar value={$selectedAddress?.value} />
		</p>
	</div>
	<div class="mt-2">
		<p class="m-0">
			<small class="text-uppercase text-black-50">indirizzo</small>
		</p>
		<div class="d-flex">
			<div class="w-50">
				<p>
					{$selectedAddress?.readableAddress}
				</p>
			</div>

			<div class="w-50">
				{#if $selectedAddress?.type === 'address'}
					<img class="img-fluid mt-2" src={streetviewUrl} alt="street view perview" />
				{:else}
					<img class="img-fluid mt-2" src={googleSatelliteUrl} alt="satellite perview" />
				{/if}
			</div>
		</div>
	</div>
	<div class="mt-2">
		<Sentence value={$selectedAddress?.value} />
	</div>
	<div class="mt-2">
		<p class="m-0">
			<small class="text-uppercase text-black-50">condividi su</small>
		</p>
		<div class="d-flex mt-1">
			<TwitterButton {text} {url} {hashtags} {via} />
			<FacebookButton quote={text} {url} />
		</div>
	</div>
	<div class="mt-2">
		<p class="m-0">
			<small class="text-uppercase text-black-50">agisci</small>
		</p>
		<div class="d-grid mt-1">
			<a href="https://google.com" class="btn btn-danger" role="button">Partecipa all'appello!</a>
		</div>
	</div>
</div>

<style>
	.closeBtn {
		width: 35px;
		height: 35px;
	}

	.rightPanel {
		overflow-y: auto;
	}
</style>
