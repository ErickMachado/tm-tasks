import Cookies from 'js-cookie'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Dashboard = () =>
  import(/*webpackChunkName: "dashboard"*/ '@/components/pages/Dashboard.vue')
const Landing = () =>
  import(/*webpackChunkName: "landing"*/ '@/components/pages/Landing.vue')

const routes = [
  {
    component: Landing,
    name: 'landing',
    path: '/'
  },
  {
    component: Dashboard,
    meta: {
      auth: true
    },
    name: 'dashboard',
    path: '/dashboard'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    const isAuthenticated = Cookies.get('todo:user')

    if (!isAuthenticated) return next({ name: 'landing' })
    else next()
  }

  next()
})

export default router
