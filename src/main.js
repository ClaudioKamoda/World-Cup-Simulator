import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { store } from './store/store'
import './assets/css/global.scss'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
