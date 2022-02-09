<template>
	<div id="app">
		<NavBar />
		<MatchList />
	</div>
</template>

<script>
import MatchList from './components/MatchList.vue'
import NavBar from './components/NavBar.vue'

export default {
	name: 'App',
	components: {
		MatchList,
		NavBar
	},
	data() {}
}
</script>

<style lang="scss" scoped>
#app {
	height: 100vh;
	width: 100vw;
	@include Flexbox($justify: space-between);
}
</style>
