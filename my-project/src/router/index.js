import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/components/login.vue'


Vue.use(Router)

/*配置路由*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
