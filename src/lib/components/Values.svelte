<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	const options = {
		perPage: 4,
		perMove: 1,
		arrows: false,
		pagination: false,
		gap: '3rem',
		speed: 2000,
		breakpoints: {
			820: {
				perPage: 1,
				type: 'loop',
				focus: 'center'
			}
		}
	};

	const valueCarousel = [
		{
			id: 1,
			src: 'https://placehold.co/280x380/png',
			alt: 'Img 1'
		},
		{
			id: 2,
			src: 'https://placehold.co/280x380/png',
			alt: 'Img 2'
		},
		{
			id: 3,
			src: 'https://placehold.co/280x380/png',
			alt: 'Img 3'
		},
		{
			id: 4,
			src: 'https://placehold.co/280x380/png',
			alt: 'Img 4'
		}
	];
</script>

<section class="section-padding">
	<div class="value-wrapper">
		<div class="container">
			<div class="parent-company">
				<img class="parent-logo" src="https://placehold.co/600x200/png" alt="Parent Logo" />
				<p class="parent-company-desc section-description">
					We create spaces that enable Everyday Joys; one community, one family, and one home at a
					time. Start your new home with comfort and luxury.
				</p>
			</div>
			<div class="value-carousel-wrapper">
				<h3 class="section-heading sh-b3">Value we preserve</h3>
				<Splide {options} aria-label="My Favorite Images">
					{#each valueCarousel as slide}
						<SplideSlide>
							<img src={slide.src} alt={slide.alt} />
						</SplideSlide>
					{/each}
				</Splide>
				<div class="value-cta">
					<a href="/brand" class="btn btn-secondary">Brand Story</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.parent-company {
		max-width: 860px;
		margin-inline: auto;
	}
	.parent-logo {
		max-width: 500px;
		margin-inline: auto;
		margin-block: 1.4rem;
	}
	.parent-company-desc {
		text-align: center;
		margin-bottom: 1.4rem;
	}
	.value-cta {
		margin-block: 2.4rem 0;
		text-align: center;
	}
</style>
