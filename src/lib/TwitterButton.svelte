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

<a
	style="width:50px;height:50px"
	class="rounded-circle btn btn-lg btn-dark-gray p-0 d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"
	><i class="fs-2 bi bi-twitter text-info" />
</a>
