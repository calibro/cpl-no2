<script>
	export let text;
	export let url;
	export let hashtags;
	export let via;
	export let related;

	$: query = [
		text && `text=${encodeURIComponent(text)}`,
		url && `url=${encodeURIComponent(url)}`,
		hashtags && `hashtags=${hashtags}`,
		via && `via=${encodeURIComponent(via)}`,
		related && `related=${encodeURIComponent(related)}`
	]
		.filter(Boolean)
		.join('&');

	$: href = `https://twitter.com/intent/tweet?${query}`;
</script>

<a class="btn btn-danger w-50 mx-1" role="button" {href} target="_blank"> Twitter </a>
