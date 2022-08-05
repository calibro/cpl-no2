<script>
	import { fly, fade } from 'svelte/transition';
	import { selectedAddress } from '$lib/stores';
	import Map from '$lib/Map.svelte';
	import LeftPanel from '$lib/LeftPanel.svelte';
	import IntroPanel from '../lib/introPanel.svelte';

	let showInfoPanel = true;
	let showInfoFirst = true;

	$: {
		showInfoPanel = $selectedAddress ? false : showInfoFirst ? true : false;
	}

	$: {
		if ($selectedAddress) {
			showInfoFirst = false;
		}
	}
</script>

<div class="mapContainer position-absolute w-100 h-100">
	<Map />
</div>

{#if $selectedAddress}
	<div
		transition:fly={{ duration: 200, x: 490, opacity: 1 }}
		class="leftPanelContainer position-absolute"
	>
		<LeftPanel />
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

	.leftPanelContainer {
		top: 20px;
		right: 20px;
		bottom: 20px;
		width: 490px;
	}

	.introPanelContainer {
	}
</style>
