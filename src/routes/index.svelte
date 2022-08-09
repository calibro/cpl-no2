<script context="module">
	export async function load({ fetch }) {
		const url = `/grid.json`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				grid: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import { selectedAddress } from '$lib/stores';
	import Map from '$lib/Map.svelte';
	import RightPanel from '$lib/RightPanel.svelte';
	import IntroPanel from '$lib/introPanel.svelte';
	import AddressSearch from '$lib/AddressSearch.svelte';
	import { swipe } from 'svelte-gestures';
	import Box from '$lib/Box.svelte';
	export let grid;

	let showInfoPanel = true;
	let showInfoFirst = true;
	let topRightPanel = true;

	$: {
		showInfoPanel = $selectedAddress ? false : showInfoFirst ? true : false;
	}

	$: {
		if ($selectedAddress) {
			showInfoFirst = false;
		}
	}

	function toggleTop() {
		topRightPanel = !topRightPanel;
	}

	function handler(event) {
		const direction = event.detail.direction;
		if (direction === 'top') {
			topRightPanel = false;
		} else if (direction === 'bottom') {
			topRightPanel = true;
		}
	}
</script>

<div class="mapContainer position-absolute w-100 h-100">
	<Map gridRawData={grid} />
</div>

{#if $selectedAddress}
	<div
		transition:fade
		class="rightPanelContainer position-absolute"
		class:topRightPanel
		on:click={toggleTop}
		use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
		on:swipe={handler}
	>
		<RightPanel />
	</div>
{/if}

{#if !showInfoFirst}
	<div transition:fade class="adderssSearchContainer position-absolute">
		<Box>
			<AddressSearch id="map_address" />
		</Box>
	</div>
{/if}

{#if showInfoPanel && showInfoFirst}
	<div transition:fade class="introPanelContainer position-absolute w-100 h-100">
		<IntroPanel />
	</div>
{/if}

<style>
	.mapContainer {
	}

	.rightPanelContainer {
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 2;
		transition: top 0.3s linear;
	}

	.topRightPanel {
		top: calc(100% - 150px);
	}

	.introPanelContainer {
		z-index: 2;
	}

	.adderssSearchContainer {
		top: 20px;
		left: 20px;
		width: calc(100% - 40px);
	}

	@media (min-width: 768px) {
		.adderssSearchContainer {
			width: 350px;
		}

		.rightPanelContainer {
			top: 20px;
			right: 20px;
			bottom: 20px;
			width: 450px;
			height: calc(100% - 40px);
			z-index: 2;
		}
	}
</style>
