import Vue from 'vue'
import Router from 'vue-router'
import Search from '../views/search/index'

Vue.use(Router)

export default new Router({
  routes: [
  /*  {
      	path: '/',
      	name: 'Index',
      	component: Index
    },*/
    {
    	path: '/search',
       	name: 'Search',
   		component: Search
    }
  ]
})
