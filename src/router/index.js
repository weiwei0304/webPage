import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ShopPage from '@/pages/ShopPage.vue'

const router = createRouter({
  history: createWebHashHistory(), // 繼續使用 hash 模式
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
  ],
})

export default router
