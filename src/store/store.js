import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		selectedGroup: ''
	},
	mutations: {
		changeNavigation(state, group) {
			state.selectedGroup = group
		}
	},
	actions: {
		changeNavigation(context, group) {
			context.commit('changeNavigation', group)
		}
	}
})
