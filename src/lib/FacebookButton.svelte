<script>
	export let url;

	$: query = [url && `u=${encodeURIComponent(url)}`].filter(Boolean).join('&');

	$: href = `https://facebook.com/sharer/sharer.php?${query}`;
</script>

<a
	style="width:50px;height:50px"
	class="rounded-circle btn btn-dark-gray btn-lg p-0 d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"><i class="fs-2 bi bi-facebook text-primary" /></a
>
