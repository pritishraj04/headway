<script>
	const { data } = $props();
	const projects = data.projects;
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { getPrice } from '$lib/utils/projectUtils.js';
	import { getStatus } from '$lib/utils/projectUtils.js';

	let toggleOverlay = $state([]);

	projects.forEach((el) => {
		toggleOverlay.push(false);
	});
</script>

<main>
	<div class="page-heading-wrapper projects-header">
		<div class="container">
			<h1 class="page-heading">Projects</h1>
			<p class="page-heading-paragraph">Find where you belong.</p>
		</div>
	</div>
	<div class="container">
		<div class="project-search">
			<input type="text" class="project-search-input" placeholder="Search projects" />
		</div>

		<div class="project-filter-bar">
			<div class="project-filter-item">
				<label for="project-category">Category:</label>
				<select id="project-category" class="form-select project-filter-dropdown">
					<option value="">All Categories</option>
					<!-- Populate categories dynamically -->
				</select>
			</div>
			<div class="project-filter-item">
				<label for="project-status">Status:</label>
				<select id="project-status" class="form-select project-filter-dropdown">
					<option value="">All Status</option>
					<!-- Populate status dynamically -->
				</select>
			</div>
			<div class="project-filter-item">
				<label for="project-location">Location:</label>
				<select id="project-location" class="form-select project-filter-dropdown">
					<option value="">All Locations</option>
					<!-- Populate locations dynamically -->
				</select>
			</div>
			<div class="project-filter-item">
				<label for="project-price">Price Range:</label>
				<select id="project-price" class="form-select project-filter-dropdown">
					<option value="">All Prices</option>
					<!-- Populate price range dynamically -->
				</select>
			</div>
			<div class="project-filter-item">
				<button class="btn btn-secondary project-reset-btn">Reset</button>
			</div>
		</div>
		<div class="project-list">
			{#each projects as project, index}
				<div class="project-card">
					<div class="project-image-container">
						<img class="project-card-image" src={project.images[0]} alt={project.name} />
						<div class="project-overlay" class:active={toggleOverlay[index]}>
							<h5 class="project-overlay-heading">
								Connect with us to enquire about this property
							</h5>
							<div class="project-overlay-ctas">
								<button class="btn btn-skeleton overlay-cta">
									<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
									<p class="project-cta-text">Enquire Now</p></button
								>
								<button class="btn btn-skeleton overlay-cta">
									<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
									<p class="project-cta-text">Schedule a Visit</p></button
								>
								<button class="btn btn-skeleton overlay-cta">
									<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
									<p class="project-cta-text">Call us</p></button
								>
								<button class="btn btn-skeleton overlay-cta">
									<Icon icon="ic:baseline-whatsapp" width="16" height="16" />
									<p class="project-cta-text">Whatsapp</p></button
								>
							</div>
						</div>
					</div>
					<div class="project-card-content">
						<div class="name">
							<button
								class="project-cta btn btn-skeleton"
								class:active={toggleOverlay[index]}
								onclick={() => (toggleOverlay[index] = !toggleOverlay[index])}
								><Icon icon="ei:plus" width="32" height="32" /></button
							>
							<h5 class="project-card-location">{project.location}, {project.city}</h5>
							<h3 class="project-card-title">{project.name}</h3>
						</div>
						<div class="project-status">
							<span class="status-icon">
								<Icon
									icon={getStatus(project).icon}
									width="16"
									height="16"
									color={getStatus(project).color}
								/>
							</span>
							<p class="status-text">
								{getStatus(project).name}
							</p>
						</div>
						<div class="price-possession">
							<span class="price-possession-amount">{getPrice(project)} |</span>
							<span class="price-possession-status">
								<span class="possession-title"> Possession Date</span>
								<span class="possession-time">{project.time_of_possession}</span>
							</span>
						</div>
						<div class="bhk">
							{#each project.prices as price, index}
								{price.name}
								{#if index < project.prices.length - 2}
									&#44;&nbsp;
								{:else if index === project.prices.length - 2}
									&amp;&nbsp;
								{/if}
							{/each}
						</div>
						<a href={`/projects/${project.slug}`} class="btn btn-skeleton veiw-project"
							>View Project <Icon
								icon="ant-design:double-right-outlined"
								width="14"
								height="14"
							/></a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	.project-search-input {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32px' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10.783 18.828a8.05 8.05 0 0 0 7.439-4.955a8.03 8.03 0 0 0-1.737-8.765a8.045 8.045 0 0 0-13.735 5.68c0 2.131.846 4.174 2.352 5.681a8.05 8.05 0 0 0 5.68 2.359m5.706-2.337l4.762 4.759'/%3E%3C/svg%3E");
		background-color: #fff;
		background-image: var(--svg);
		background-position: center left 16px;
		background-repeat: no-repeat;
		border: 0;
		border-radius: 4px;
		box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.15);
		color: #666;
		margin-bottom: 14px;
		font-size: 18px;
		height: 60px;
		line-height: 1.27;
		padding-left: 60px;
		width: 100%;
	}
	.project-filter-bar {
		margin-bottom: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		justify-content: space-between;
		border: 1px solid #dabb0b;
		box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.15);

		align-items: center;
		padding: 10px 0;
	}
	.project-filter-item {
		padding: 0.5rem 1rem;
	}
	.project-filter-item:not(:last-child) {
		border-right: 1px solid #dabb0b;
	}
	@media (max-width: 730px) {
		.project-filter-item:not(:last-child) {
			border-right: none;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #dabb0b;
		}
	}
	.project-filter-dropdown {
		position: relative;
		display: inline-block;
		background-color: #fff;
		border-radius: 4px;
		cursor: pointer;
		padding: 10px;
		font-size: 16px;
		border: none;
	}
	.project-reset-btn {
		padding: 0 10px;
	}

	.projects-header {
		background-image: url('https://placehold.co/1900x300/png');
	}
	.project-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		gap: 20px;
		margin-bottom: 40px;
	}
	.project-card {
		text-decoration: none;
		color: inherit;
		border: transparent 1px solid;
	}
	.project-card:hover {
		border: #ebebeb 1px solid;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		transition: border 0.2s ease-in-out;
	}
	.project-image-container {
		position: relative;
	}
	.project-card-image {
		width: 100%;
		height: 400px;
		object-fit: cover;
		border-radius: 4px;
	}
	.project-overlay {
		background-clip: padding-box;
		background-color: rgba(255, 255, 255, 0.84);
		border-bottom: 40px solid rgba(255, 255, 255, 0.84);
		border-right: 15px solid rgba(255, 255, 255, 0.84);
		border-top: 40px solid rgba(255, 255, 255, 0.84);
		bottom: 0;
		left: 0;
		opacity: 0;
		overflow: auto;
		padding-top: 0;
		padding: 1rem 0.5rem;
		position: absolute;
		right: 0;
		top: 100%;
		z-index: -99;
		transition: all 0.25s ease-in-out 0s;
	}
	.project-overlay.active {
		opacity: 1;
		top: 0;
		z-index: 99;
		transition: all 0.25s ease-in-out 0.25s;
	}
	.project-overlay-heading {
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1;
		margin-bottom: 12px;
	}
	.project-overlay-ctas {
		display: flex;
		gap: 12px;
		flex-direction: column;
		justify-content: start;
	}
	.overlay-cta {
		display: flex;
		gap: 8px;
		align-self: flex-start;
	}
	.project-cta-text {
		white-space: nowrap;
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: capitalize;
	}

	.project-card-content {
		padding: 20px;
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 0 0 4px 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.project-card-location {
		font-size: 0.75rem;
		font-weight: 300;
		line-height: 1;
		color: #7e7e7e;
		margin-bottom: 4px;
	}

	.project-card-title {
		font-size: 1rem;
		font-weight: 500;
		color: #666;
		line-height: 1.2;
		margin-bottom: 4px;
	}
	.project-cta {
		float: right;
		width: fit-content;
		transition: transform ease-in-out 0.2s;
	}
	.project-cta.active {
		transform: rotate(45deg);
	}
	.project-status {
		display: flex;
		align-self: flex-start;
		align-items: center;
		gap: 8px;
		margin-bottom: 4px;
		border: #e4e4e4 1px solid;
		border-radius: 4px;
		padding: 2px 4px;
	}
	.status-text {
		font-size: 14px;
		color: #222222;
		font-weight: 500;
	}

	.price-possession {
		margin-bottom: 4px;
	}
	.price-possession-amount {
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1;
	}
	.price-possession-status {
		font-size: 0.75rem;
	}
	.bhk {
		font-size: 14px;
		font-weight: 300;
		line-height: 1;
		margin-bottom: 8px;
		color: #7e7e7e;
		font-weight: 400;
		margin-bottom: 14px;
	}
	.veiw-project {
		font-size: 14px;
		font-weight: 800;
		text-decoration: none;
		color: #666;
		display: flex;
		gap: 4px;
		align-self: flex-end;
		justify-content: end;
		align-items: center;
		white-space: nowrap;
	}
</style>
