import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '@/modules/welcome/components/TheWelcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: TheWelcome
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('@/modules/app/components/TheApp.vue'),
      children: [
        {
          path: '',
          name: 'app-main',
          component: () => import('@/modules/test/TestComponent.vue')
        }
      ]
    },
    {
      path: '/sign-up',
      component: {
        template: '<div>Sign Up</div>'
      }
    },
    {
      path: '/sign-in',
      component: () => import('@/modules/signIn/components/SignInForm.vue')
    }
  ]
})

export default router
