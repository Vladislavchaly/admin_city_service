import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthLogin from '@/views/auth/AuthLogin.vue'
import Dashboard from '@/views/Dashboard.vue'
import { requireAuth } from '@/middleware/auth'
import container from '@/providers/service-provider'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: AuthLogin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(requireAuth(container.get('AuthService')))

export default router
