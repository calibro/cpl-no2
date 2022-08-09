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
	style="width:35px;height:35px"
	class="rounded-circle btn btn-lg btn-light p-0 d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"
	><i class="bi bi-twitter text-info" />
</a>
