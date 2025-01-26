<script>
	import HamburgerBtn from './HamburgerBtn.svelte';

	let isMenuVisible = $state(false);
	let y = $state(0);

	const toggleMenu = () => {
		isMenuVisible = !isMenuVisible;
	};

	const closeMenu = () => {
		isMenuVisible = false;
	};
</script>

<svelte:window bind:scrollY={y} />

<header class="header" class:header-solid-bg={isMenuVisible || y > 100}>
	<div class="container">
		<div class="header-wrapper">
			<div class="logo">
				<a href="/">
					<img class="company-logo" src="https://placehold.co/120x40/png" alt="Company Logo" />
				</a>
			</div>
			<HamburgerBtn {isMenuVisible} {toggleMenu} />
			<nav class="header-navigation" class:is-visible={isMenuVisible}>
				<ul class="header-navs" data-role="list">
					<li class="header-nav">
						<a class="link-inverted nav-link" onclick={closeMenu} href="/brand">Brand Story</a>
					</li>
					<li class="header-nav">
						<a class="link-inverted nav-link" onclick={closeMenu} href="/company">Company</a>
					</li>
					<li class="header-nav">
						<a class="link-inverted nav-link" onclick={closeMenu} href="/projects">Projects</a>
					</li>
					<li class="header-nav">
						<a class="link-inverted nav-link" onclick={closeMenu} href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
		background: rgb(0, 0, 0);
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%);
	}
	.header-solid-bg {
		background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9) 100%);
		/* backdrop-filter: blur(20px); */
		transition: background-color 0.3s ease-in-out;
	}
	.company-logo {
		width: 7rem;
	}

	.header-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-block: 1.7rem;
	}
	.header-navs {
		display: flex;
		gap: 1.7rem;
	}
	.nav-link {
		text-transform: uppercase;
		font-size: 1.2rem;
	}
	@media screen and (max-width: 820px) {
		.header-wrapper {
			padding-block: 1rem;
		}
		.company-logo {
			width: 5rem;
		}
		.header-navigation {
			opacity: 0;
			pointer-events: none;
			transform: translateY(-100%);
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 1) 100%);
			backdrop-filter: blur(20px);
			padding: 2rem;
			transition: all 0.3s ease-in-out;
		}
		.header-navs {
			flex-direction: column;
			gap: 1rem;
		}
		.header-navigation.is-visible {
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}
	}
</style>
