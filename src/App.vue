<template>
	<div id="app">
		<NavBar />
		<div>
			<Match
				v-for="match in example"
				:key="match.id"
				:matchData="match"
			/>
		</div>
	</div>
</template>

<script>
import Match from './components/Match.vue'
import NavBar from './components/NavBar.vue'

export default {
	name: 'App',
	components: {
		Match,
		NavBar
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
				},
				{
					id: 3,
					team_A: 'FRA',
					score_A: 0,
					team_B: 'BRA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 4,
					team_A: 'GER',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 5,
					team_A: 'BRA',
					score_A: 0,
					team_B: 'ARG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 6,
					team_A: 'FRA',
					score_A: 0,
					team_B: 'GER',
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
	@include Flexbox($justify: space-between);
	gap: 10px;
}
</style>
