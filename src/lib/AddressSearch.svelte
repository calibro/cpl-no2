<script>
	import { bboxGrid, selectedAddress, searchMode } from '$lib/stores';
	import AutoComplete from 'simple-svelte-autocomplete';
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
		const features = [];
		let request = `https://nominatim.openstreetmap.org/search?q="${keyword}"&format=geojson&polygon_geojson=1&addressdetails=1&countrycodes=it&bounded=1&viewbox=${$bboxGrid.join()}&accept-language=it`;
		const response = await fetch(request);
		const geojson = await response.json();
		for (let feature of geojson.features) {
			let center = [
				feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
				feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
			];
			const readableAddress = `${feature.properties.address.road}${
				feature.properties.address.house_number
					? ', ' + feature.properties.address.house_number
					: ''
			}`;

			let point = {
				type: 'address',
				feature: {
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: center
					},
					properties: feature.properties
				},

				address: feature.properties.display_name,
				readableAddress: readableAddress,
				id: feature.properties.place_id
			};
			features.push(point);
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
	<div class="d-flex fs-7 fw-bold mb-2">
		<div
			class="pointer"
			class:text-white-50={$searchMode !== 'address'}
			class:text-decoration-underline={$searchMode === 'address'}
			on:click={() => changeSearchMode('address')}
		>
			Indirizzo
		</div>
		<div
			class:text-white-50={$searchMode !== 'school'}
			class:text-decoration-underline={$searchMode === 'school'}
			on:click={() => changeSearchMode('school')}
			class="ms-2 pointer"
		>
			Scuole
		</div>
	</div>
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
			placeholder="inserisci un indirizzo..."
			noResultsText="nessun indirizzo trovato"
			maxItemsToShowInList={'5'}
			hideArrow={true}
			{showClear}
			disabled={!$bboxGrid.length}
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
			placeholder="inserisci una scuola..."
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
</div>

<style>
	.autocompleteContainer :global(.autocomplete-list-item.selected) {
		background-color: var(--bs-purple) !important;
	}

	.autocompleteContainer :global(.autocomplete) {
		height: 2.625rem !important;
	}
</style>
