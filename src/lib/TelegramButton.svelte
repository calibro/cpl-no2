<script>
	export let text;
	export let url;

	$: href = encodeURI(`https://t.me/share/url?url=${url}&text=${text}`);
</script>

<a
	style="width:35px;height:35px"
	class="rounded-circle btn btn-light p-0 btn-lg d-flex align-items-center justify-content-center mx-1 lh-1"
	role="button"
	{href}
	target="_blank"><i class="bi bi-telegram telegram" /></a
>

<style>
	.telegram {
		color: #0088cc !important;
	}
</style>
