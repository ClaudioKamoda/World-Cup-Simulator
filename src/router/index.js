import Vue from 'vue'
import VueRouter from 'vue-router'
import GroupStage from '../views/GroupStage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'GroupStage',
		component: GroupStage
	}
]

const router = new VueRouter({
	routes
})

export default router
