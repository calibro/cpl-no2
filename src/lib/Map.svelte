<script>
	import {
		colorScale,
		bboxGrid,
		selectedAddress,
		mediaQuery,
		gridBoundary,
		searchMode
	} from '$lib/stores';
	import { base } from '$app/paths';
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, GeolocateControl, Marker } from 'maplibre-gl';
	import { feature, bbox, merge } from 'topojson-client';
	import centroidTurf from '@turf/centroid';
	import bufferTurf from '@turf/buffer';
	import bboxTurf from '@turf/bbox';
	import PolygonLookup from 'polygon-lookup';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import schoolIcon from '$lib/icons/school.png';
	import homeIcon from '$lib/icons/home.png';
	import markerIcon from '$lib/icons/marker.png';
	export let gridRawData, schools;
	const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

	const zoomTo = 15;

	const icons = [
		{ url: schoolIcon, id: 'school' },
		{ url: homeIcon, id: 'home' },
		{ url: markerIcon, id: 'marker' }
	];

	let map;
	let mapContainer;
	let hoveredStateId;
	let marker;
	let markerEl;
	let mapLoaded = false;

	const md = mediaQuery('(min-width: 768px)');

	$: padding = $md ? { right: 450 } : { bottom: 150, top: 75 };

	const grid = feature(gridRawData, gridRawData.objects.test);
	const boundary = merge(gridRawData, gridRawData.objects.test.geometries);
	const buffer = bboxTurf(bufferTurf(boundary, 10));

	bboxGrid.set(bbox(gridRawData));
	gridBoundary.set(boundary);
	grid.features.forEach((feature, i) => {
		feature.id = i;
		feature.properties.color = $colorScale(feature.properties.NO2_stima);
	});
	const lookup = new PolygonLookup(grid);

	$: {
		if ($searchMode === 'school') {
			if (map && mapLoaded) {
				map.setLayoutProperty('schools', `visibility`, 'visible');
			}
		} else {
			if (map && mapLoaded) {
				map.setLayoutProperty('schools', `visibility`, 'none');
			}
		}
	}

	$: {
		if (map && markerEl) {
			marker = new Marker({ element: markerEl, anchor: 'bottom' }).setLngLat([0, 0]).addTo(map);
		}
	}

	$: {
		if (
			$selectedAddress &&
			($selectedAddress.type === 'address' || $selectedAddress.type === 'school')
		) {
			const square = lookup.search(...$selectedAddress.feature.geometry.coordinates);
			selectedAddress.update((d) => {
				d.value = square.properties.NO2_stima;
				return d;
			});
			if (map) {
				map.easeTo({
					center: $selectedAddress.feature.geometry.coordinates,
					zoom: map.getZoom() > zoomTo ? map.getZoom() : zoomTo,
					padding: padding
				});
				//square.properties.icon = $selectedAddress.type === 'address' ? 'home' : 'school';
				map.getSource('selectedGrid').setData({
					type: 'FeatureCollection',
					features: [square]
				});

				const squareCentroid = centroidTurf(square);
				marker.setLngLat(squareCentroid.geometry.coordinates);
			}
		} else if ($selectedAddress && $selectedAddress.type === 'grid') {
			if (map?.getSource('selectedGrid')) {
				// selectedAddress.update((d) => {
				// 	d.square.properties.icon = 'marker';
				// 	return d;
				// });
				map.getSource('selectedGrid').setData({
					type: 'FeatureCollection',
					features: [$selectedAddress.square]
				});

				const squareCentroid = centroidTurf($selectedAddress.square);
				marker.setLngLat(squareCentroid.geometry.coordinates);

				map.flyTo({
					center: $selectedAddress.feature.geometry.coordinates,
					zoom: map.getZoom() > zoomTo ? map.getZoom() : zoomTo,
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
		map = new Map({
			container: mapContainer,
			//style: 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json',
			//style: `https://api.maptiler.com/maps/toner/style.json?key=${MAPTILER_API_KEY}`,
			style: `${base}/toner-custom.json`,
			bounds: $bboxGrid,
			fitBoundsOptions: { padding: 20 },
			maxZoom: 16,
			minZoom: 11,
			maxBounds: buffer
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
			mapLoaded = true;
			const layers = map.getStyle().layers;
			let labelLayerId = '';

			map.setPaintProperty('road_label_primary', `text-color`, 'rgba(0,0,0,0.5)');
			map.setPaintProperty('road_label_primary', `text-halo-width`, 1);
			map.setPaintProperty('road_label_primary', `text-halo-color`, 'rgba(255,255,255,0.5)');
			map.setPaintProperty('road_label_secondary', `text-color`, 'rgba(0,0,0,0.5)');
			map.setPaintProperty('road_label_secondary', `text-halo-width`, 1);
			map.setPaintProperty('road_label_secondary', `text-halo-color`, 'rgba(255,255,255,0.5)');

			for (let i = 0; i < layers.length; i++) {
				if (
					layers[i].type === 'symbol' &&
					layers[i].layout['text-field'] &&
					layers[i].id !== 'waterway_label'
				) {
					labelLayerId = layers[i].id;
					break;
				}

				if (layers[i].id === 'water' || layers[i].id === 'waterway') {
					map.setPaintProperty(layers[i].id, `${layers[i].type}-color`, '#d4dadc');
				}

				const roads = ['road_secondary', 'road_primary', 'road_highway'];

				if (roads.includes(layers[i].id)) {
					const color = {
						stops: [
							[10, '#444444'],
							[12, '#444444'],
							[15, '#444444']
						]
					};
					map.setPaintProperty(layers[i].id, `${layers[i].type}-color`, color);
				}
			}

			map.addSource('grid', {
				type: 'geojson',
				data: grid
				// generateId: true
			});

			map.addSource('schools', {
				type: 'geojson',
				data: schools
				// generateId: true
			});

			map.addLayer(
				{
					id: 'grid',
					type: 'fill',
					source: 'grid',
					paint: {
						'fill-color': ['get', 'color'],
						//'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.75],
						'fill-opacity': 0.9
					}
				},
				labelLayerId
			);

			map.addLayer(
				{
					id: 'schools',
					type: 'circle',
					source: 'schools',
					paint: {
						'circle-color': 'white',
						//'circle-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.75],
						'circle-opacity': 1,
						'circle-stroke-color': 'black',
						'circle-stroke-width': 1
					},
					layout: {
						visibility: 'none'
					}
				},
				labelLayerId
			);

			map.addLayer(
				{
					id: 'gridLine',
					type: 'line',
					source: 'grid',
					paint: {
						'line-color': 'white',
						'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 3, 0]
					}
				},
				labelLayerId
			);

			map.addSource('selectedGrid', {
				type: 'geojson',
				data: null
			});

			map.addLayer(
				{
					id: 'selectedGrid',
					type: 'line',
					source: 'selectedGrid',
					minzoom: 15,
					paint: {
						'line-color': 'white',
						'line-width': 3
					}
				},
				labelLayerId
			);
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
<div id="markerContainer" class="d-flex flex-column justify-content-center" bind:this={markerEl}>
	<div
		class="bg-white w-100 flex-grow-1 flex-shrink-1 rounded d-flex align-items-center justify-content-center fs-2"
		style="color:{$colorScale($selectedAddress?.value)}"
	>
		{#if $selectedAddress?.type === 'address'}
			<i class="bi bi-house-door-fill" />
		{:else if $selectedAddress?.type === 'school'}
			<i class="bi bi-pencil-fill" />
		{:else}
			<i class="bi bi-square-fill" />
		{/if}
	</div>
	<div class="text-white flex-grow-0 flex-shrink-0 d-flex justify-content-center">
		<span class="arrow-down" />
	</div>
</div>

<style>
	.map {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	#markerContainer {
		width: 50px;
		height: 58px;
	}

	.arrow-down {
		width: 0;
		height: 0;
		display: inline-block;
		vertical-align: middle;
		border-style: solid;
		border-width: 8px 8px 0 8px;
		border-color: white transparent transparent transparent;
	}

	.map :global(.mapboxgl-user-location-accuracy-circle),
	.map :global(.mapboxgl-user-location-dot) {
		display: none;
	}

	.map :global(.mapboxgl-ctrl-bottom-left),
	.map :global(.maplibregl-ctrl-bottom-left) {
		bottom: 205px;
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
		background: white;
	}
	/* 
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
	} */

	@media (min-width: 768px) {
		.map :global(.mapboxgl-ctrl-bottom-left),
		.map :global(.maplibregl-ctrl-bottom-left) {
			bottom: 0px;
		}
	}
</style>
