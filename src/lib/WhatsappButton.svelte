<script>
	export let text;

	$: href = encodeURI(`https://wa.me/?text=${text}`);
</script>

<a
	style="width:35px;height:35px"
	class="rounded-circle btn btn-light btn-lg p-0 d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"><i class="bi bi-whatsapp whatsapp" /></a
>

<style>
	.whatsapp {
		color: #4fce5d;
	}
</style>
