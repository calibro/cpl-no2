<script>
	// import { googleGeocoder } from '$lib/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';
	import '../app.scss';
	const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
	// const initializeGapi = async () => {
	// 	console.log('ciao');
	// 	const geocoder = new google.maps.Geocoder();
	// 	googleGeocoder.set(geocoder);
	// };
	const title = 'Scopri quanto NO2 respiri a Milano!';
	const description =
		'Il biossido di azoto (NO2), che proviene dai veicoli diesel che percorrono le vie di Milano, causa la morte prematura di 1500 persone ogni anno nel capoluogo lombardo. Scopri la concentrazione annua di NO2 inserendo il tuo indirizzo a Milano, quello di dove lavori, o selezionando una scuola.';
</script>

<svelte:head>
	<script defer async src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`}>
	</script>
</svelte:head>
<MetaTags
	{title}
	titleTemplate="%s | Cittadini per l'aria"
	{description}
	,
	openGraph={{
		url: $page.url,
		title: title,
		description: description,
		images: [
			{
				url: `${$page.url}saicheariarespiri.png`,
				width: 1245,
				height: 700,
				alt: title
			}
		],
		site_name: 'Scopri quanto NO2 respiri a Milano!'
	}}
	twitter={{
		site: $page.url,
		cardType: 'summary_large_image',
		title: title,
		description: description,
		image: `${$page.url}saicheariarespiri.png`,
		imageAlt: title
	}}
/>

<slot />
