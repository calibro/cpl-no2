<script>
	export let text;

	$: query = [text && `text=${encodeURIComponent(text)}`].filter(Boolean).join('&');

	$: href = `https://wa.me/?${query}`;
</script>

<a
	style="width:35px;height:35px"
	class="rounded-circle btn btn-dark-gray btn-lg p-0 d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"><i class="bi bi-whatsapp whatsapp" /></a
>

<style>
	.whatsapp {
		color: #4fce5d;
	}
</style>
