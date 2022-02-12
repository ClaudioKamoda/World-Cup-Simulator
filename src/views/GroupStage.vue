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
	},
	computed: {
		groupGeneralData() {
			return this.$store.state.groupsDataObject
		}
	},
	data() {
		return {
			groupsData: {}
		}
	},
	watch: {
		groupGeneralData() {
			//insert data into local storage
		}
	}
}
</script>

<style lang="scss" scoped>
.groupStage {
	width: 100vw;
	height: 100vh;
	@include Flexbox($justify: space-between);
}
</style>
