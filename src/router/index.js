import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login " */ '../views/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    children: [
      {
        path: '/dashbord',
        name: 'dashbord',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/dashbord/dashbord.vue'),
      },
      {
        path: '/customer',
        name: 'customer',
        component: () => import(/* webpackChunkName: "customer" */ '../views/customer/index.vue'),
      },
      {
        path: '/team',
        name: 'team',
        component: () => import(/* webpackChunkName: "team" */ '../views/team/index.vue'),
      },
      {
        path: '/project',
        name: 'project',
        component: () => import(/* webpackChunkName: "project" */ '../views/project/index.vue'),
      },
      {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../views/product/index.vue'),
      },
      {
        path: '/alarm',
        name: 'alarm',
        component: () => import(/* webpackChunkName: "alarm" */ '../views/alarm/index.vue'),
      },
      {
        path: '/logs',
        name: 'logs',
        component: () => import(/* webpackChunkName: "logs" */ '../views/logs/index.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
