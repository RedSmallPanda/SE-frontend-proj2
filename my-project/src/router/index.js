import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/components/login.vue'
import Hello from '@/components/Hello'
import Index from '../views/index/index'
import Manage from '../views/manage/index'
import Search from '../views/search/index'
import Information from '@/components/information'



Vue.use(Router)

/*配置路由*/
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
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/info',
      name: 'Information',
      component: Information
    }
  ]
});
