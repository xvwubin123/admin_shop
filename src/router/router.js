import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/login.vue'
import Home from '@/components/Home/home.vue'
import Rights from '../components/Rights/rights.vue'
import Roles from '../components/Roles/roles.vue'
import Users from '../components/Users/users.vue'
/* eslint-disable */
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/rights',
          name: 'rights',
          component: Rights
        },
        {
          path: '/roles',
          name: 'roles',
          component: Roles
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        }
      ]
    }
  ]
})
//导航守卫
router.beforeEach((to, from, next) => {
  //是否是登陆页面
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }
})
export default router

