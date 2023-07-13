import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthLogin from '@/views/auth/AuthLogin.vue'
import Dashboard from '@/views/DashboardContent.vue'
import Main from '@/views/MainView.vue'
import { requireAuth } from '@/middleware/auth'
import container from '@/providers/service-provider'
import UpdateAccount from '@/views/account/UpdateAccount.vue'
import UsersContent from '@/views/UsersContent.vue'

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
      },
      {
        path: '/update-account',
        name: 'update-account',
        component: UpdateAccount
      },
      {
        path: '/users',
        name: 'users',
        component: UsersContent
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
