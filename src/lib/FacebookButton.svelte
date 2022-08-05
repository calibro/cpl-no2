<script>
	export let quote;
	export let url;

	$: href = encodeURI(`https://facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`);
</script>

<a class="btn btn-danger w-50 mx-1" role="button" {href} target="_blank"> Facebook </a>
