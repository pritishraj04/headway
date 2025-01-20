<script>
	import Exclusive from '$lib/components/Exclusive.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import Values from '$lib/components/Values.svelte';
	import Plus from '$lib/components/Plus.svelte';
	import Legal from '$lib/components/Legal.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const options = {
		arrows: false,
		rewind: true
	};

	const heroCarousel = [
		{
			id: 1,
			src: 'https://placehold.co/1900x800/png',
			msrc: 'https://placehold.co/400x780/png',
			alt: 'Img 1'
		},
		{
			id: 2,
			src: 'https://placehold.co/1900x800/png',
			msrc: 'https://placehold.co/400x780/png',
			alt: 'Img 2'
		},
		{
			id: 3,
			src: 'https://placehold.co/1900x800/png',
			msrc: 'https://placehold.co/400x780/png',
			alt: 'Img 3'
		}
	];

	let x;
</script>

<svelte:window bind:innerWidth={x} />

<main>
	<div class="container-fluid">
		<div class="hero-wrapper">
			<Splide {options} aria-label="My Favorite Images">
				{#each heroCarousel as slide}
					<SplideSlide>
						<img class="carousel-img" src={x > 1200 ? slide.src : slide.msrc} alt={slide.alt} />
					</SplideSlide>
				{/each}
			</Splide>
			<p class="hero-bottom-bar">REAL ESTATE • INTERIOR DESIGN • TURNKEY CONSTRUCTION</p>
		</div>
	</div>
	<Values />
	<Highlight />
	<Exclusive />
	<Plus />
	<Legal />
</main>

<style>
	.hero-bottom-bar {
		font-size: 1rem;
		text-align: center;
		padding: 0.4rem 0.5rem;
		background-color: #d6d6d6;
		color: #7f7e79;
	}
	.carousel-img {
		max-height: 800px;
		object-fit: cover;
		object-position: center;
	}
</style>
