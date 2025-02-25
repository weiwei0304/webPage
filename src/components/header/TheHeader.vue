<template>
  <div>
    <header class="w-full py-4 px-6 shadow-sm">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo 部分 -->
        <div class="logo">
          <h1 class="text-xl font-bold text-gray-800">網站名稱</h1>
        </div>

        <!-- 桌面版導航選單 - 在更小的螢幕尺寸以上顯示 -->
        <nav class="hidden sm:block">
          <ul class="flex space-x-8">
            <li v-for="(item, index) in menuItems" :key="index">
              <component
                :is="item.isRouter ? 'RouterLink' : 'a'"
                :to="item.isRouter ? item.to : undefined"
                :href="!item.isRouter ? item.to : undefined"
                class="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                @click="item.onClick ? item.onClick() : null"
              >
                <font-awesome-icon v-if="item.icon" :icon="item.icon" class="mr-1" />
                {{ item.text }}
              </component>
            </li>
          </ul>
        </nav>

        <!-- 漢堡選單按鈕 - 僅在更小的螢幕尺寸顯示 -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="sm:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="開啟選單"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </header>

    <!-- 行動版側邊選單 - 滑入效果 -->
    <transition>
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 sm:hidden" @click.self="isMenuOpen = false">
        <!-- 背景遮罩 - 加入淡入淡出效果 -->
        <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500"></div>

        <!-- 側邊選單 - 加強滑動效果 -->
        <div
          class="absolute top-0 right-0 w-64 h-full bg-white shadow-xl transform transition-all duration-500 ease-out overflow-hidden"
          :class="{
            'translate-x-0 scale-100': isMenuOpen,
            'translate-x-full scale-95': !isMenuOpen,
          }"
        >
          <!-- 選單內容 - 加入內容的淡入效果 -->
          <div class="p-6">
            <div class="flex justify-end mb-6">
              <button
                @click="isMenuOpen = false"
                class="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="關閉選單"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul class="space-y-6">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="transform transition-transform duration-500 translate-x-0"
                :style="{ transitionDelay: `${150 + index * 50}ms` }"
              >
                <component
                  :is="item.isRouter ? 'RouterLink' : 'a'"
                  :to="item.isRouter ? item.to : undefined"
                  :href="!item.isRouter ? item.to : undefined"
                  class="block text-gray-700 hover:text-gray-900 transition-colors text-lg flex items-center"
                  @click="
                    () => {
                      isMenuOpen = false
                      if (item.onClick) item.onClick()
                    }
                  "
                >
                  <font-awesome-icon v-if="item.icon" :icon="item.icon" class="mr-2" />
                  {{ item.text }}
                </component>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 導入 Font Awesome 相關的組件和圖標
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo, faCartShopping } from '@fortawesome/free-solid-svg-icons'

// 將圖標添加到庫中
library.add(faCircleUser, faCircleInfo, faCartShopping)

const isMenuOpen = ref(false)

// 定義所有選單項目
const menuItems = [
  {
    text: '去逛逛',
    to: { name: 'shop' },
    isRouter: true,
    icon: ['fas', 'cart-shopping'],
  },
  {
    text: '關於我們',
    to: '#',
    isRouter: false,
    icon: ['fas', 'circle-info'],
  },
  {
    text: '會員登入',
    to: '/login',
    isRouter: true,
    icon: ['far', 'circle-user'],
  },
]
</script>

<style scoped>
/* 從右側滑入的過渡效果 */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

.v-enter-from .absolute.right-0,
.v-leave-to .absolute.right-0 {
  transform: translateX(100%);
}

/* 選單項目的滑入效果 */
.v-enter-from li,
.v-leave-to li {
  transform: translateX(30px);
  opacity: 0;
}

.v-enter-to li,
.v-leave-from li {
  transform: translateX(0);
  opacity: 1;
}

/* 背景遮罩的淡入淡出效果 */
.v-enter-from .bg-black,
.v-leave-to .bg-black {
  opacity: 0;
}

.v-enter-to .bg-black,
.v-leave-from .bg-black {
  opacity: 0.5;
}
</style>
