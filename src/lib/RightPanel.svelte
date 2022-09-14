<script>
	import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
	import { selectedAddress } from '$lib/stores';
	import { page } from '$app/stores';
	import Bar from '$lib/Bar.svelte';
	import Box from '$lib/Box.svelte';
	import TwitterButton from '$lib/TwitterButton.svelte';
	import FacebookButton from '$lib/FacebookButton.svelte';
	import WhatsappButton from '$lib/WhatsappButton.svelte';
	import TelegramButton from '$lib/TelegramButton.svelte';
	import Sentence from '$lib/Sentence.svelte';
	import { base } from '$app/paths';

	export let togglePanel, panelOpen, municipi;
	let municipio;
	const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
	// const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

	$: text = `A #Milano, ${
		$selectedAddress?.readableAddress
	}, c'è una concentrazione media annua di ${$selectedAddress?.value} µg/m3 di #NO2. ${Math.round(
		Math.floor($selectedAddress?.value) / 10
	)} volte oltre il limite a tutela della salute 😷. Scopri quanta NO2 respiri sulla mappa di Cittadini per l'aria!`;
	$: textTwitter = `A #Milano, ${
		$selectedAddress?.readableAddress
	}, c'è una concentrazione media annua di ${$selectedAddress?.value} µg/m3 di #NO2. ${Math.round(
		Math.floor($selectedAddress?.value) / 10
	)} volte oltre il limite a tutela della salute 😷. Scopri quanta NO2 respiri sulla mappa di @citizensforair! @BeppeSala @AriannaCensi @Anna_Scavuzzo`;
	$: url = $page.url.href;

	$: {
		if ($selectedAddress) {
			municipi.features.forEach((d) => {
				if (booleanPointInPolygon($selectedAddress.feature, d)) {
					municipio = d.properties.MUNICIPIO;
				}
			});
		}
	}

	const hashtags = '';
	const via = '';

	$: googleSatelliteUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${$selectedAddress?.feature.geometry.coordinates[1]},${$selectedAddress?.feature.geometry.coordinates[0]}&zoom=19&scale=2&size=458x165&maptype=satellite&key=${GOOGLE_API_KEY}&format=png`;
	$: streetviewUrl = `https://maps.googleapis.com/maps/api/streetview?size=458x165&key=${GOOGLE_API_KEY}&location=${$selectedAddress?.feature.geometry.coordinates[1]},${$selectedAddress?.feature.geometry.coordinates[0]}&source=outdoor`;
	// $: bgUrl =
	// 	$selectedAddress?.type === 'address' || $selectedAddress?.type === 'school'
	// 		? streetviewUrl
	// 		: googleSatelliteUrl;

	$: checkUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?size=458x165&key=${GOOGLE_API_KEY}&location=${$selectedAddress?.feature.geometry.coordinates[1]},${$selectedAddress?.feature.geometry.coordinates[0]}&source=outdoor`;

	const checkStreetview = async function (url) {
		const response = await fetch(url);
		if (response.ok) {
			return await response.json();
		} else {
			return {
				status: 'ZERO_RESULTS'
			};
		}
	};

	const onScroll = (e) => {
		if (e.target.scrollTop === 0) {
			togglePanel();
		}
	};
</script>

<div
	style="overflow:{!panelOpen ? 'auto' : 'hidden'}"
	class="rightPanel w-100 h-100 bg-dark-gray shadow-sm p-3 pt-0 p-md-3"
	on:scroll={onScroll}
>
	<div class="d-md-none d-grid">
		<div
			on:click={() => togglePanel()}
			aria-label="open and close information panel"
			class="d-flex align-items-center justify-content-center"
		>
			<i
				class="bi"
				class:bi-chevron-compact-up={panelOpen}
				class:bi-chevron-compact-down={!panelOpen}
			/>
		</div>
	</div>
	<Box>
		<p class="m-0 fs-6 fw-semibold text-uppercase text-center mb-2">
			concentrazione di NO<sub>2</sub>
			<span class="text-lowercase">(µg/m<sup>3</sup>)</span>
		</p>

		<Bar value={$selectedAddress?.value} />
	</Box>
	{#if $selectedAddress?.type === 'address' || $selectedAddress?.type === 'school'}
		{#await checkStreetview(checkUrl)}
			<Box height={'165px'}>
				<p class="m-0 fs-7 text-white fw-semibold text-uppercase mb-2">indirizzo</p>

				<p class="fs-5 fw-bold text-white">
					{$selectedAddress?.readableAddress}
				</p>
			</Box>
		{:then response}
			{#if response.status !== 'OK'}
				<Box height={'165px'} background={`url(${googleSatelliteUrl})`}>
					<p class="m-0 fs-7 fw-semibold text-uppercase mb-2 text-white">indirizzo</p>

					<p class="fs-5 fw-bold text-white">
						{$selectedAddress?.readableAddress}
					</p>
				</Box>
			{:else}
				<Box height={'165px'} background={`url(${streetviewUrl})`}>
					<p class="m-0 fs-7 fw-semibold text-uppercase mb-2 text-white">indirizzo</p>

					<p class="fs-5 fw-bold text-white">
						{$selectedAddress?.readableAddress}
					</p>
				</Box>
			{/if}
		{/await}
	{:else}
		<Box height={'165px'} background={`url(${googleSatelliteUrl})`}>
			<p class="m-0 fs-7 fw-semibold text-uppercase mb-2 text-white">indirizzo</p>

			<p class="fs-5 fw-bold text-white">
				{$selectedAddress?.readableAddress}
			</p>
		</Box>
	{/if}
	<!-- <Box height={'165px'} background={`url(${bgUrl})`}>
		<p class="m-0 fs-7 fw-semibold text-uppercase mb-2">indirizzo</p>

		<p class="fs-5">
			{$selectedAddress?.readableAddress}
		</p>
	</Box> -->
	<Box>
		<p class="m-0 fs-7 fw-semibold text-uppercase mb-2">effetti sulla salute</p>
		<Sentence value={$selectedAddress?.value} />
	</Box>
	<Box>
		<div class="d-grid mt-1 mb-2">
			<a
				href={`https://cittadiniperlaria.org/appello-al-sindaco/?no2value=${$selectedAddress?.value}&municipality=${municipio}`}
				class="btn btn-lg btn-accent rounded-pill fw-bold"
				role="button">Sottoscrivi l'appello!</a
			>
		</div>
	</Box>
	<Box>
		<!-- <p class="m-0 fs-7 fw-semibold text-uppercase mb-2">condividi</p> -->
		<div class="d-flex mt-1">
			<TwitterButton text={textTwitter} {url} {hashtags} {via} />
			<FacebookButton {url} />
			<TelegramButton {text} {url} />
			<WhatsappButton text={`${text} ${$page.url.href}`} />
		</div>
	</Box>
	<Box>
		<p class="m-0 fs-7 fw-semibold text-uppercase mb-2">fonte/elaborazione</p>
		<p>
			<a
				class="text-body"
				href="https://www.cittadiniperlaria.org/comitato-scientifico-del-progetto-no2-no-grazie/"
				target="_blank"
				>Elaborazione dati 2/2020: Comitato scientifico del progetto "NO<sub>2</sub> NO Grazie!"</a
			>
		</p>
		<p class="m-0 fs-7 fw-semibold text-uppercase mb-2">design e sviluppo</p>
		<p class="mb-0">
			<a class="text-body" href="https://calib.ro" target="_blank">Studio Calibro</a>
		</p>
	</Box>
	<Box>
		<div class="d-flex align-items-center justify-content-center">
			<div class="text-uppercase me-2 fs-7 fw-bold flex-grow-0 flex-shrink-0">un progetto di</div>
			<a
				href="https://www.cittadiniperlaria.org/"
				role="button"
				style="max-width: 200px;"
				class="btn btn-dark-gray rounded-pill"
				target="_blank"
				><img src={`${base}/logo.png`} class="img-fluid" alt="logo cittadini per l'aria" /></a
			>
		</div>
	</Box>
</div>

<style>
	@media (min-width: 768px) {
		.rightPanel {
			overflow-y: auto !important;
		}
	}
</style>
