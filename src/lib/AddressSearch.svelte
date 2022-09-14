<script>
	import { bboxGrid, selectedAddress, searchMode, gridBoundary } from '$lib/stores';
	import AutoComplete from 'simple-svelte-autocomplete';
	import pip from '@turf/boolean-point-in-polygon';
	// import { feature } from 'topojson-client';
	export let id, schools;
	let selectedFeature;
	let showClear;

	const schoolItems = schools?.features.map((d) => {
		return {
			type: 'school',
			feature: d,
			address: d.properties.NOME,
			readableAddress: d.properties.NOME,
			id: d.properties.NOME
		};
	});

	async function forwardGeocode(keyword) {
		if (keyword.length > 1) {
			showClear = true;
		} else {
			showClear = false;
		}
		const geocoder = new google.maps.Geocoder();
		let googleResults;
		try {
			const responseGoogle = await geocoder.geocode({
				address: `${keyword}, Milano`,
				componentRestrictions: {
					country: 'IT'
				}
			});
			googleResults = responseGoogle.results;
		} catch (error) {
			googleResults = [];
		}

		const features = [];

		for (let feature of googleResults) {
			let center = [feature.geometry.location.lng(), feature.geometry.location.lat()];
			const readableAddress = feature.address_components.filter((d) => d.types[0] === 'route')[0]
				?.short_name;

			let point = {
				type: 'address',
				feature: {
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: center
					},
					properties: { readableAddress }
				},

				address: feature.formatted_address,
				readableAddress,
				id: feature.place_id
			};

			if (pip(point.feature, $gridBoundary)) {
				features.push(point);
			}
		}
		return features;
	}

	$: {
		if (selectedFeature) {
			selectedAddress.set(selectedFeature);
		}
	}

	function changeSearchMode(mode) {
		selectedFeature = null;
		searchMode.set(mode);
	}
</script>

<div class="w-100 autocompleteContainer">
	<div class="d-flex fs-6 fw-bold mb-2 justify-content-center">
		<div
			class="pointer badge rounded-pill text-bg-dark-gray px-3 py-2"
			class:text-black-50={$searchMode !== 'address'}
			class:text-decoration-underline={$searchMode === 'address'}
			on:click={() => changeSearchMode('address')}
		>
			Cerca un indirizzo
		</div>
		<div
			class:text-black-50={$searchMode !== 'school'}
			class:text-decoration-underline={$searchMode === 'school'}
			on:click={() => changeSearchMode('school')}
			class="ms-2 pointer badge rounded-pill text-bg-dark-gray px-3 py-2"
		>
			Cerca una scuola
		</div>
	</div>
	{#if true}
		{#if $searchMode === 'address'}
			<AutoComplete
				inputId={id}
				searchFunction={forwardGeocode}
				delay="200"
				localFiltering={false}
				showLoadingIndicator={true}
				labelFieldName="address"
				valueFieldName="id"
				bind:selectedItem={selectedFeature}
				className="w-100"
				inputClassName="form-control form-control-lg"
				placeholder="es: Piazza Duomo 1"
				noResultsText="nessun indirizzo trovato"
				maxItemsToShowInList={'5'}
				hideArrow={true}
				{showClear}
				disabled={!$gridBoundary}
			/>
		{:else}
			<AutoComplete
				items={schoolItems}
				inputId={id}
				labelFieldName="address"
				valueFieldName="id"
				keywordsFunction={(d) => d.address + ' ' + d.feature.properties.INDIRIZZO}
				bind:selectedItem={selectedFeature}
				className="w-100"
				inputClassName="form-control form-control-lg"
				placeholder="es: Vittorio Veneto"
				noResultsText="nessuna scuola trovata"
				moreItemsText="scuole non mostrate"
				maxItemsToShowInList={5}
				hideArrow={true}
				showClear={false}
				disabled={!$bboxGrid.length}
			>
				<div slot="item" let:item let:label>
					{@html label}
					<div class="fs-7 mt-1">
						{item.feature.properties.GRADO} - {item.feature.properties.INDIRIZZO}
					</div>
				</div>
			</AutoComplete>
		{/if}
	{/if}
</div>

<style>
	.autocompleteContainer :global(.autocomplete-list-item.selected) {
		background-color: var(--bs-dark-gray) !important;
		color: var(--bs-body-color) !important;
	}

	.autocompleteContainer :global(.autocomplete) {
		height: 2.625rem !important;
	}
</style>
