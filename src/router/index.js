import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import ShowcaseView from '../views/ShowCaseView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: ShowcaseView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
