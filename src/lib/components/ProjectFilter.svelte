<script>
	let { projects } = $props();
	// Filter criteria
	let filters = $state({
		category: '',
		status: '',
		location: '',
		price: ''
	});

	// Extract unique values dynamically for dropdowns
	const categories = [...new Set(projects.map((p) => p.residentialType))];
	const statuses = [...new Set(projects.map((p) => p.status))];
	const locations = [...new Set(projects.map((p) => p.city))];

	// Price ranges (example ranges, adjust as needed)
	const priceRanges = [
		{ label: 'Below 1 Cr', min: 0, max: 10000000 },
		{ label: '1 Cr - 3 Cr', min: 10000000, max: 30000000 },
		{ label: 'Above 3 Cr', min: 30000000 }
	];

	// Filtered projects
	let filteredProjects = projects;

	// Update filters and apply filtering logic
	function applyFilters() {
		filters.subscribe((filter) => {
			filteredProjects = projects.filter((p) => {
				const matchesCategory = !filter.category || p.residentialType === filter.category;
				const matchesStatus = !filter.status || p.status === filter.status;
				const matchesLocation = !filter.location || p.city === filter.location;
				const matchesPrice =
					!filter.price ||
					(priceRanges.find((range) => range.label === filter.price)?.min <=
						Math.min(...p.starting_prices.map((sp) => sp.minimum_price)) &&
						(priceRanges.find((range) => range.label === filter.price)?.max || Infinity) >=
							Math.min(...p.starting_prices.map((sp) => sp.minimum_price)));
				return matchesCategory && matchesStatus && matchesLocation && matchesPrice;
			});
		});
	}

	// Reset filters
	function resetFilters() {
		filters.set({
			category: '',
			status: '',
			location: '',
			price: ''
		});
		applyFilters();
	}
</script>

<div class="project-filter-bar">
	<div class="project-filter-item">
		<label for="project-category">Category:</label>
		<select
			id="project-category"
			class="form-select project-filter-dropdown"
			bind:value={$filters.category}
			onchange={applyFilters}
		>
			<option value="">All Categories</option>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>
	<div class="project-filter-item">
		<label for="project-status">Status:</label>
		<select
			id="project-status"
			class="form-select project-filter-dropdown"
			bind:value={$filters.status}
			onchange={applyFilters}
		>
			<option value="">All Status</option>
			{#each statuses as status}
				<option value={status}>{status}</option>
			{/each}
		</select>
	</div>
	<div class="project-filter-item">
		<label for="project-location">Location:</label>
		<select
			id="project-location"
			class="form-select project-filter-dropdown"
			bind:value={$filters.location}
			onchange={applyFilters}
		>
			<option value="">All Locations</option>
			{#each locations as location}
				<option value={location}>{location}</option>
			{/each}
		</select>
	</div>
	<div class="project-filter-item">
		<label for="project-price">Price Range:</label>
		<select
			id="project-price"
			class="form-select project-filter-dropdown"
			bind:value={$filters.price}
			onchange={applyFilters}
		>
			<option value="">All Prices</option>
			{#each priceRanges as price}
				<option value={price.label}>{price.label}</option>
			{/each}
		</select>
	</div>
	<div class="project-filter-item">
		<button class="btn btn-secondary project-reset-btn" onclick={resetFilters}> Reset </button>
	</div>
</div>

<style>
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
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		border-right: 1px solid #dabb0b;
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
	@media (max-width: 730px) {
		.project-filter-bar {
			grid-template-columns: 1fr;
		}
		.project-filter-item:not(:last-child) {
			border-right: none;
			border-bottom: 1px solid #dabb0b;
		}
	}
</style>
