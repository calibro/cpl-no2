<script>
	import { colorScale, bboxGrid, selectedAddress, mediaQuery } from '$lib/stores';
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, GeolocateControl } from 'maplibre-gl';
	import { feature, bbox } from 'topojson-client';
	import centroidTurf from '@turf/centroid';
	import PolygonLookup from 'polygon-lookup';
	import 'maplibre-gl/dist/maplibre-gl.css';
	export let gridRawData;
	const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

	let map;
	let mapContainer;
	let hoveredStateId;

	const md = mediaQuery('(min-width: 768px)');

	$: padding = $md ? { right: 450 } : { bottom: 150, top: 75 };

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
				map.easeTo({
					center: $selectedAddress.feature.geometry.coordinates,
					zoom: 17,
					padding: padding
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
					zoom: 17,
					padding: padding
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

	.map :global(.mapboxgl-ctrl-bottom-left),
	.map :global(.maplibregl-ctrl-bottom-left) {
		bottom: 155px;
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

	.map :global(.mapboxgl-ctrl-group),
	.map :global(.maplibregl-ctrl-group) {
		background: var(--bs-indigo);
	}

	.map :global(.mapboxgl-ctrl button.mapboxgl-ctrl-zoom-in .mapboxgl-ctrl-icon),
	.map :global(.maplibregl-ctrl button.maplibregl-ctrl-zoom-in .maplibregl-ctrl-icon) {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='white'%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z'/%3E%3C/svg%3E");
	}
	.map :global(.mapboxgl-ctrl button.mapboxgl-ctrl-zoom-out .mapboxgl-ctrl-icon),
	.map :global(.maplibregl-ctrl button.maplibregl-ctrl-zoom-out .maplibregl-ctrl-icon) {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='white'%3E%3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E%3C/svg%3E");
	}

	.map :global(.mapboxgl-ctrl button.mapboxgl-ctrl-geolocate .mapboxgl-ctrl-icon),
	.map :global(.maplibregl-ctrl button.maplibregl-ctrl-geolocate .maplibregl-ctrl-icon) {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='white'%3E%3Cpath d='M10 4C9 4 9 5 9 5v.1A5 5 0 0 0 5.1 9H5s-1 0-1 1 1 1 1 1h.1A5 5 0 0 0 9 14.9v.1s0 1 1 1 1-1 1-1v-.1a5 5 0 0 0 3.9-3.9h.1s1 0 1-1-1-1-1-1h-.1A5 5 0 0 0 11 5.1V5s0-1-1-1zm0 2.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/svg%3E");
	}

	@media (min-width: 768px) {
		.map :global(.mapboxgl-ctrl-bottom-left),
		.map :global(.maplibregl-ctrl-bottom-left) {
			bottom: 0px;
		}
	}
</style>