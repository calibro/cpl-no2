<script>
	export let height, background, className;
</script>

<div
	class={`box bg-purple rounded p-3 mb-2 position-relative ${className}`}
	style="height:{height ? height : 'auto'};background-image:{background
		? 'linear-gradient(180deg, rgba(41, 41, 72, 0.5) 40%, rgba(47, 47, 74, 0) 100%), ' + background
		: 'unset'}"
>
	<slot />
</div>

<style>
	.box:last-of-type {
		margin-bottom: 0 !important;
	}

	.box {
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
