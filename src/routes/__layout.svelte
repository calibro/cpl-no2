<script>
	import { googleGeocoder } from '$lib/stores';
	import '../app.scss';
	const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
	// const initializeGapi = async () => {
	// 	console.log('ciao');
	// 	const geocoder = new google.maps.Geocoder();
	// 	googleGeocoder.set(geocoder);
	// };
</script>

<svelte:head>
	<script defer async src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`}>
	</script>
</svelte:head>

<slot />
