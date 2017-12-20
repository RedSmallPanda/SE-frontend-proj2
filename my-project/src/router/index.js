import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
/*引入页面*/
import Login from '@/components/login.vue'
=======
import Hello from '@/components/Hello'
import Index from '../views/index/index'
import Manage from '../views/manage/index'
>>>>>>> 99e2162d1d217cc9979e3e68a9ef3f781d8fc6bc


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
