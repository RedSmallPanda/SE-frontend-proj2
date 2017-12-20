import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/components/login.vue'
import Hello from '@/components/Hello'
import Index from '../views/index/index'
import Manage from '../views/manage/index'



Vue.use(Router)

/*配置路由*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
});
