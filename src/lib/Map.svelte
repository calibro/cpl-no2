<script>
	import { colorScale, bboxGrid, selectedAddress } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, GeolocateControl } from 'maplibre-gl';
	import { feature } from 'topojson-client';
	import { bbox } from 'topojson-client';
	import centroidTurf from '@turf/centroid';
	import PolygonLookup from 'polygon-lookup';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import gridRawData from '$lib/data/grid.json';

	const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

	let map;
	let mapContainer;
	let hoveredStateId;

	const grid = feature(gridRawData, gridRawData.objects.test);
	bboxGrid.set(bbox(gridRawData));
	grid.features.forEach((feature, i) => {
		feature.id = i;
		feature.properties.color = $colorScale(feature.properties.NO2_stima);
	});
	const lookup = new PolygonLookup(grid);

	$: {
		if ($selectedAddress && $selectedAddress.type === 'address' && !$selectedAddress.value) {
			const square = lookup.search(...$selectedAddress.feature.geometry.coordinates);
			selectedAddress.update((d) => {
				d.value = square.properties.NO2_stima;
				return d;
			});
			if (map) {
				map.flyTo({
					center: $selectedAddress.feature.geometry.coordinates,
					zoom: 17
				});

				map.getSource('selectedGrid').setData({
					type: 'FeatureCollection',
					features: [square]
				});
			}
		} else if ($selectedAddress && $selectedAddress.type === 'grid') {
			if (map?.getSource('selectedGrid')) {
				map.getSource('selectedGrid').setData({
					type: 'FeatureCollection',
					features: [$selectedAddress.square]
				});

				map.flyTo({
					center: $selectedAddress.feature.geometry.coordinates,
					zoom: 17
				});
			}
		} else if (!$selectedAddress && map?.getSource('selectedGrid')) {
			if (map.getSource('selectedGrid')._data) {
				map.getSource('selectedGrid').setData({
					type: 'FeatureCollection',
					features: []
				});
			}
		}
	}

	onMount(() => {
		//   const { env } = _process;
		//   const apiKey = env.API_KEY;

		//   if (!apiKey) {
		//     throw new Error("You need to configure env API_KEY first, see README");
		//   }

		map = new Map({
			container: mapContainer,
			style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
			//style: `https://api.maptiler.com/maps/streets/style.json?key=${MAPTILER_API_KEY}`,
			bounds: $bboxGrid,
			fitBoundsOptions: { padding: 20 },
			maxZoom: 16,
			minZoom: 11
			// maxBounds: bboxGrid to buffer it
		});

		const geolocate = new GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			}
		});

		geolocate.on('geolocate', function (event) {
			const square = lookup.search(event.coords.longitude, event.coords.latitude);
			const centroid = centroidTurf(square);
			selectedAddress.set({
				type: 'grid',
				address: centroid.geometry.coordinates.map((d) => d.toFixed(5)).join(','),
				readableAddress: centroid.geometry.coordinates.map((d) => d.toFixed(5)).join(','),
				value: square.properties.NO2_stima,
				feature: { ...centroid, proporties: square.properties },
				square: square
			});
		});

		map.addControl(geolocate, 'bottom-left');
		map.addControl(new NavigationControl({ showCompass: false }), 'bottom-left');

		map.on('load', function () {
			map.addSource('grid', {
				type: 'geojson',
				data: grid
				// generateId: true
			});

			map.addLayer({
				id: 'grid',
				type: 'fill',
				source: 'grid',
				paint: {
					'fill-color': ['get', 'color'],
					//'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.75],
					'fill-opacity': 0.75
				}
			});

			map.addLayer({
				id: 'gridLine',
				type: 'line',
				source: 'grid',
				paint: {
					'line-color': 'white',
					'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 3, 0]
				}
			});

			map.addSource('selectedGrid', {
				type: 'geojson',
				data: null
			});

			map.addLayer({
				id: 'selectedGrid',
				type: 'line',
				source: 'selectedGrid',
				paint: {
					'line-color': 'white',
					'line-width': 3
				}
			});
		});

		map.on('mousemove', 'grid', function (e) {
			if (e.features.length > 0) {
				if (hoveredStateId) {
					map.setFeatureState({ source: 'grid', id: hoveredStateId }, { hover: false });
				}
				hoveredStateId = e.features[0].id;
				map.setFeatureState({ source: 'grid', id: hoveredStateId }, { hover: true });
			}
		});

		map.on('mouseleave', 'grid', function () {
			if (hoveredStateId) {
				map.setFeatureState({ source: 'grid', id: hoveredStateId }, { hover: false });
			}
			hoveredStateId = null;
		});

		map.on('click', 'grid', function (e) {
			const centroid = centroidTurf(e.features[0]);
			selectedAddress.set({
				type: 'grid',
				address: centroid.geometry.coordinates.map((d) => d.toFixed(5)).join(','),
				readableAddress: centroid.geometry.coordinates.map((d) => d.toFixed(5)).join(','),
				value: e.features[0].properties.NO2_stima,
				feature: { ...centroid, proporties: e.features[0].properties },
				square: e.features[0]
			});
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});
</script>

<div class="map" id="map" bind:this={mapContainer} />

<style>
	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.map :global(.mapboxgl-user-location-accuracy-circle),
	.map :global(.mapboxgl-user-location-dot) {
		display: none;
	}

	.map :global(.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl),
	.map :global(.maplibregl-ctrl-bottom-left .maplibregl-ctrl) {
		margin: 0 0 20px 20px;
	}

	.map :global(.mapboxgl-ctrl-group button),
	.map :global(.maplibregl-ctrl-group button) {
		width: 35px;
		height: 35px;
	}
</style>
