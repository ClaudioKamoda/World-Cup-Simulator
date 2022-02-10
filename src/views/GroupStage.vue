<template>
	<div class="groupStage">
		<NavBar />
		<Group />
		<MatchList />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Group from '@/components/Group.vue'
import MatchList from '@/components/MatchList.vue'

export default {
	name: 'GroupStage',
	components: {
		NavBar,
		Group,
		MatchList
	}
}
</script>

<style lang="scss" scoped>
.groupStage {
	height: 100vh;
	width: 100%;
	@include Flexbox();
}
</style>
