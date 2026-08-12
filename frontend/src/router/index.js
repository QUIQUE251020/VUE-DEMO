import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/modules/auth/views/LoginView.vue'
import saleDetailView from '@/modules/sales/views/SaleDetailView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/sale-detail',
      name: 'saleDetail',
      component: saleDetailView,
      meta: { requiresAuth: true } 
    },
  ],
})

  router.beforeEach((to) => {
    const authStore = useAuthStore()
    if(to.meta.requiresAuth && !authStore.isAuthenticated){
      return {name: 'login'}
    }
  })

export default router
