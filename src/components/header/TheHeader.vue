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
            <li>
              <RouterLink
                :to="{ name: 'shop' }"
                class="text-gray-700 hover:text-gray-900 transition-colors"
              >
                去逛逛
              </RouterLink>
            </li>
            <li>
              <a href="#" class="text-gray-700 hover:text-gray-900 transition-colors">關於我們</a>
            </li>
            <li>
              <RouterLink to="/login" class="text-gray-700 hover:text-gray-900 transition-colors">
                會員登入
              </RouterLink>
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
                class="transform transition-transform duration-500 translate-x-0"
                :style="{ transitionDelay: '150ms' }"
              >
                <RouterLink
                  :to="{ name: 'shop' }"
                  class="block text-gray-700 hover:text-gray-900 transition-colors text-lg"
                  @click="isMenuOpen = false"
                >
                  去逛逛
                </RouterLink>
              </li>
              <li
                class="transform transition-transform duration-500 translate-x-0"
                :style="{ transitionDelay: '200ms' }"
              >
                <a
                  href="#"
                  class="block text-gray-700 hover:text-gray-900 transition-colors text-lg"
                  @click="isMenuOpen = false"
                >
                  關於我們
                </a>
              </li>
              <li
                class="transform transition-transform duration-500 translate-x-0"
                :style="{ transitionDelay: '250ms' }"
              >
                <RouterLink
                  to="/login"
                  class="block text-gray-700 hover:text-gray-900 transition-colors text-lg"
                  @click="isMenuOpen = false"
                >
                  會員登入
                </RouterLink>
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

const isMenuOpen = ref(false)
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
