import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ShopPage from '@/pages/ShopPage.vue'
import ProductDetail from '@/pages/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory('/webPage/'),
  routes: [
    {
      path: '/',
      name: 'home',
      // 直接使用靜態導入
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
    },
    { path: '/shop/:id', name: 'ProductDetail', component: ProductDetail },
  ],
})

export default router
