<template>
	<div id="app">
		<Match v-for="match in example" :key="match.id" :matchData="match" />
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
			example: [
				{
					id: 1,
					team_A: 'BRA',
					score_A: 0,
					team_B: 'GER',
					score_B: 0,
					match_time: '13:00',
					stadium: 'Education City'
				},
				{
					id: 2,
					team_A: 'FRA',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
#app {
	height: 100vh;
	width: 100vw;
	@include Flexbox($direction: column);
}
</style>
