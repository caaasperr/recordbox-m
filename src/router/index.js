import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import HomeView from '../views/Home.vue'
import VinylView from '../views/Vinyl.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vinyl',
      name: 'vinyl',
      component: VinylView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      //await axios.get('https://api.recordbox.org/api/v1/auth/session', { withCredentials: true })
      await axios.get('http://192.168.0.15:8080/api/v1/auth/session', { withCredentials: true })
      next()
    } catch (error) {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
