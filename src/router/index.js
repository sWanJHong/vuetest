import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [
  {
    path: '/', // 默认home页面
    name: 'home',
    component: () =>
      import(
        /* webpackChunkName: "defaultPage" */ '@/views/home.vue'
      )
  },
  {
    path: '/secondPage',
    name: 'secondPage',
    component: () =>
      import(
        /* webpackChunkName: "defaultPage" */ '@/views/secondPage.vue'
      )
  }
]

const router = new Router({
  mode: 'history',
  routes: routers
})

export default router