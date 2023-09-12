import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import JobsView from '../views/JobsView.vue'
import JobsDetailsView from '../views/JobsDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/jobs',
    name:'jobs',
    component: JobsView
  },
  {
    path:'/jobs/:id',
    name:'JobsDetails',
    component:JobsDetailsView
  }
  ,
  {
    path:'/all-jobs',
    redirect:'/jobs',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
