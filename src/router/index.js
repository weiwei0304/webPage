import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ShopPage from '@/pages/ShopPage.vue'
import ProductDetail from '@/pages/ProductDetail.vue'
import RepairHome from '@/pages/repair/RepairHome.vue'
import AboutUsPage from '@/pages/AboutUsPage.vue'

const router = createRouter({
  history: createWebHistory('/webPage/'),
  routes: [
    {
      path: '/',
      name: 'home',
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
    { path: '/repair-price', name: 'repair', component: RepairHome },
    { path: '/about-us', name: 'about-us', component: AboutUsPage },
  ],
  scrollBehavior() {
    // 始終滾動到頂部
    return { top: 0 }
  },
})

export default router
