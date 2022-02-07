<template>
	<div id="app">
		<Match :matchData="example" />
	</div>
</template>

<script>
import Match from './components/Match.vue'

export default {
	name: 'App',
	components: {
		Match
	},
	data() {
		return {
			example: {
				id: 1,
				team_A: 'BRA',
				team_B: 'BEL',
				match_time: '13:00',
				stadium: 'Doha'
			}
		}
	}
}
</script>

<style lang="scss" scoped></style>
