import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/interface',
    name: 'interface',
    component:() => import('../views/InterfaceBook.vue')
  },
  {
    path: '/test',
    name: 'test',
    component:() => import('../views/InterfaceTest.vue')
  },
  {
    path: '/other',
    name: 'other',
    component:() => import('../views/Other.vue')
  },
]

const router = new VueRouter({
  // mode:'history',
  routes
})

export default router
