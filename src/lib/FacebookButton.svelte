<script>
	export let url;

	$: query = [url && `u=${encodeURIComponent(url)}`].filter(Boolean).join('&');

	$: href = `https://facebook.com/sharer/sharer.php?${query}`;
</script>

<a
	style="width:35px;height:35px"
	class="rounded-circle btn btn-dark-gray btn-lg p-0 d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"><i class="bi bi-facebook text-primary" /></a
>
