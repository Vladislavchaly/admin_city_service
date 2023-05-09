import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthLogin from '@/views/auth/AuthLogin.vue'
import Dashboard from '@/views/DashboardContent.vue'
import Main from '@/views/MainView.vue'
import { requireAuth } from '@/middleware/auth'
import container from '@/providers/service-provider'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      }
    ]
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
