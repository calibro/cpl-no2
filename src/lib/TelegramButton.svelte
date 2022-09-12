<script>
	export let text;
	export let url;

	$: query = [text && `text=${encodeURIComponent(text)}`, url && `url=${encodeURIComponent(url)}`]
		.filter(Boolean)
		.join('&');

	$: href = `https://t.me/share/url?${query}`;
</script>

<a
	style="width:35px;height:35px"
	class="rounded-circle btn btn-dark-gray p-0 btn-lg d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"><i class="bi bi-telegram telegram" /></a
>

<style>
	.telegram {
		color: #0088cc !important;
	}
</style>
