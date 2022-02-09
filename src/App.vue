<template>
	<div id="app">
		<NavBar />
		<Group />
		<MatchList />
	</div>
</template>

<script>
import MatchList from './components/MatchList.vue'
import NavBar from './components/NavBar.vue'
import Group from './components/Group.vue'

export default {
	name: 'App',
	components: {
		MatchList,
		NavBar,
		Group
	}
}
</script>

<style lang="scss" scoped>
#app {
	height: 100vh;
	width: 100vw;
	@include Flexbox($justify: space-between);
}
</style>
