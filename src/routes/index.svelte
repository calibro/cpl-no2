<script context="module">
	export async function load({ fetch }) {
		const url = `/grid.json`;
		const response = await fetch(url);

		const url2 = `/all_schools.json`;
		const response2 = await fetch(url2);

		const url3 = `/municipi.json`;
		const response3 = await fetch(url3);

		return {
			status: response.status,
			props: {
				grid: response.ok && (await response.json()),
				schools: response2.ok && (await response2.json()),
				municipi: response3.ok && (await response3.json())
			}
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import { selectedAddress } from '$lib/stores';
	import Map from '$lib/Map.svelte';
	import RightPanel from '$lib/RightPanel.svelte';
	import IntroPanel from '$lib/IntroPanel.svelte';
	import AddressSearch from '$lib/AddressSearch.svelte';
	import { swipe } from 'svelte-gestures';
	export let grid, schools, municipi;

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
	<Map gridRawData={grid} {schools} />
</div>

{#if $selectedAddress}
	<div
		transition:fade
		class="rightPanelContainer position-absolute"
		class:topRightPanel
		use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
		on:swipe={handler}
	>
		<RightPanel togglePanel={toggleTop} panelOpen={topRightPanel} {municipi} />
	</div>
{/if}

{#if !showInfoFirst}
	<div transition:fade class="rounded-md adderssSearchContainer position-absolute bg-dark-gray p-2">
		<div class="rounded bg-white p-2 p-md-3">
			<AddressSearch id="map_address" {schools} />
		</div>
	</div>
{/if}

{#if showInfoPanel && showInfoFirst}
	<div transition:fade class="introPanelContainer position-absolute w-100">
		<IntroPanel {schools} />
	</div>
{/if}

<style>
	/* .mapContainer {
	} */

	.rightPanelContainer {
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 5;
		transition: top 0.3s linear;
	}

	.topRightPanel {
		top: calc(100% - 205px);
	}

	.introPanelContainer {
		z-index: 2;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}

	.adderssSearchContainer {
		top: 0px;
		left: 0px;
		width: 100%;
	}

	@media (min-width: 768px) {
		.adderssSearchContainer {
			top: 20px;
			left: 20px;
			width: 350px;
		}

		.rightPanelContainer {
			top: 0px;
			right: 0px;
			bottom: 0px;
			width: 450px;
			height: 100%;
		}
	}
</style>
