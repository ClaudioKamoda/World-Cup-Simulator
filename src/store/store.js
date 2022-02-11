import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		selectedGroup: '',
		groupsDataObject: {},
		matches: {
			A: [
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
			],
			B: [
				{
					id: 1,
					team_A: 'ENG',
					score_A: 0,
					team_B: 'SKO',
					score_B: 0,
					match_time: '13:00',
					stadium: 'Education City'
				},
				{
					id: 2,
					team_A: 'DEN',
					score_A: 0,
					team_B: 'SPA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 3,
					team_A: 'SKO',
					score_A: 0,
					team_B: 'DEN',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 4,
					team_A: 'SPA',
					score_A: 0,
					team_B: 'ENG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 5,
					team_A: 'SKO',
					score_A: 0,
					team_B: 'SPA',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				},
				{
					id: 6,
					team_A: 'DEN',
					score_A: 0,
					team_B: 'ENG',
					score_B: 0,
					match_time: '16:00',
					stadium: 'Ahmed bin Ali'
				}
			]
		}
	},
	mutations: {
		changeNavigation(state, group) {
			state.selectedGroup = group
		},
		getAllData(state, groups) {
			state.groupsDataObject = groups
		}
	},
	actions: {
		changeNavigation(context, group) {
			context.commit('changeNavigation', group)
		},
		getAllData() {}
	}
})
