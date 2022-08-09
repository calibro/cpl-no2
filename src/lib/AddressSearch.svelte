<script>
	import { bboxGrid, selectedAddress } from '$lib/stores';
	import AutoComplete from 'simple-svelte-autocomplete';
	export let id;
	let selectedFeature;

	async function forwardGeocode(keyword) {
		const features = [];
		let request = `https://nominatim.openstreetmap.org/search?q="${keyword}"&format=geojson&polygon_geojson=1&addressdetails=1&countrycodes=it&bounded=1&viewbox=${$bboxGrid.join()}`;
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
</script>

<div class="w-100 autocompleteContainer">
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
		placeholder="cerca"
		noResultsText="nessun indirizzo trovato"
		maxItemsToShowInList={5}
		hideArrow={true}
		disabled={!$bboxGrid.length}
	/>
</div>

<style>
	.autocompleteContainer :global(.autocomplete-list-item.selected) {
		background-color: var(--bs-purple) !important;
	}

	.autocompleteContainer :global(.autocomplete) {
		height: 2.625rem !important;
	}
</style>
