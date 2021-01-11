import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/Home')
const Category = () => import('views/Category')
const Profile = () => import('views/Profile')
const Shopcart = () => import('views/Shopcart')



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
