<template>
	<nav class="navbar">
		<ul>
			<li
				v-for="(group, index) in navigationList"
				:key="index"
				@click="changeNavigation(group)"
				:class="{ active: isActive(group) }"
			>
				{{ group }}
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			navigationList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
			currentNavigation: ''
		}
	},
	mounted() {
		this.changeNavigation('A')
	},
	methods: {
		changeNavigation(group) {
			this.currentNavigation = group
		},
		isActive(group) {
			return group === this.currentNavigation
		}
	}
}
</script>

<style lang="scss" scoped>
.navbar {
	width: 130px;
	height: 100%;
	background-color: white;
	@include Flexbox();

	ul {
		@include Flexbox($direction: column);
		gap: 5px;

		li {
			list-style: none;
			font-size: 3rem;
			font-weight: 600;
			text-align: center;
			border-radius: 8px;
			width: 70px;
			height: 70px;
			background-color: $blue;
			cursor: pointer;
			@include Flexbox();

			&.active {
				background-color: yellow;
			}
		}
	}
}
</style>
