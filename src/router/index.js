import Vue from 'vue' // 必须要有
import VueRouter from 'vue-router' // 必须要有
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter) // 必须要有 否则报 router-view或 router-link找不到

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/abc',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    // 使用下面会报错 目前暂不可用 ChunkLoadError: Loading chunk about failed.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default routes
// export default router
