<template>
	<section class="matchList">
		<Match v-for="match in example" :key="match.id" :matchData="match" />
	</section>
</template>

<script>
import Match from './Match.vue'

export default {
	name: 'MatchList',
	components: {
		Match
	},
	computed: {
		selectedGroup() {
			//return the current group
			return this.$store.state.selectedGroup
		}
	},
	data() {
		return {
			example: []
		}
	},
	methods: {
		getMatches() {
			this.example = this.$store.state.matches[this.selectedGroup]
		}
	},
	watch: {
		selectedGroup() {
			//watches the selected group in store, if it changes then reload the matches
			this.getMatches()
		}
	}
}
</script>

<style lang="scss" scoped>
.matchList {
	@include Flexbox($direction: column);
	gap: 10px;
	padding: 30px 50px;
}
</style>
