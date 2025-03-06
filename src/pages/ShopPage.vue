<template>
  <div class="min-h-screen flex flex-col">
    <the-header></the-header>
    <div class="flex-grow p-4">
      <div class="container mx-auto flex flex-col md:flex-row">
        <!-- 左側商品分類列表 -->
        <div class="w-2/3 mx-auto md:w-1/4 md:pr-6 mb-6 md:mb-0">
          <h2 class="text-lg font-semibold mb-3 px-1">商品分類</h2>

          <ul class="category-items">
            <li
              v-for="category in categories"
              :key="category.id"
              class="mb-2 rounded shadow-sm hover:shadow transition-shadow hover:bg-blue-300"
              :class="{
                'bg-blue-600': selectedCategory === category.id,
                'bg-blue-400': selectedCategory !== category.id,
              }"
            >
              <a
                href="#"
                class="py-2 px-4 text-white rounded flex justify-between items-center"
                @click.prevent="selectCategory(category.id)"
              >
                <span>{{ category.name }}</span>
                <span class="text-sm bg-blue-400 px-2 py-0.5 rounded-full">{{
                  category.count
                }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- 右側商品展示區塊 -->
        <div class="w-full md:w-3/4">
          <h2 class="text-lg font-semibold mb-3">
            {{ currentCategoryName || '全部商品' }}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- 商品卡片 -->
            <div
              v-for="i in 10"
              :key="i"
              class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer relative group"
            >
              <!-- 商品圖片 -->
              <div
                @click="goToProductDetail(i)"
                class="h-40 bg-gray-200 flex items-center justify-center relative"
              >
                <span class="text-gray-400">商品圖片</span>

                <!-- md 以上顯示的懸停按鈕 -->
                <div
                  class="hidden md:flex absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex-col justify-end items-center gap-4 pb-4"
                >
                  <button @click.stop="openModal" title="加入我的最愛">
                    <font-awesome-icon :icon="faHeart" class="text-gray-200 hover:text-red-500" />
                  </button>

                  <button
                    @click.stop="openModal"
                    class="w-80 rounded-md bg-white p-2 hover:bg-blue-100 transition group/cart-btn"
                    title="加入購物車"
                  >
                    加入購物車
                    <font-awesome-icon
                      :icon="faCartPlus"
                      class="group-hover/cart-btn:text-blue-400 transition-colors"
                    />
                  </button>
                </div>
              </div>

              <!-- 產品資訊區塊 - 改為 flex row 在小螢幕 -->
              <div class="p-3 flex flex-row md:flex-col justify-between items-center">
                <!-- 產品名稱和價格 -->
                <div class="flex flex-col items-start md:items-center">
                  <h3 @click="goToProductDetail(i)" class="font-medium">商品名稱 {{ i }}</h3>
                  <p class="text-red-500">$899</p>
                </div>

                <!-- 小螢幕上顯示的按鈕 (在產品名稱價格旁邊) -->
                <div class="flex md:hidden gap-2">
                  <button
                    @click.stop="openModal"
                    title="加入我的最愛"
                    class="text-gray-500 hover:text-red-500"
                  >
                    <font-awesome-icon :icon="faHeart" />
                  </button>

                  <button
                    @click.stop="openModal"
                    class="rounded-md hover:bg-blue-100 transition group/cart-btn w-20 border border-gray-400 bg-gray-300 p-2"
                    title="加入購物車"
                  >
                    <font-awesome-icon
                      :icon="faCartPlus"
                      class="text-yellow-600 transition-colors"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal组件 -->
    <BaseModal v-model="showModal">
      <div>這是Modal</div>
    </BaseModal>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '../components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
import BaseModal from '@/components/modal/BaseModal.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    TheHeader,
    TheFooter,
    FontAwesomeIcon,
    BaseModal,
  },

  data() {
    return {
      faCartPlus,
      faHeart,
      faTimes,
      selectedCategory: null,
      categories: [
        { id: 1, name: '全部商品', count: 48 },
        { id: 2, name: '熱門精選', count: 12 },
        { id: 3, name: 'iPhone配件', count: 8 },
        { id: 4, name: '充電設備', count: 15 },
        { id: 5, name: '藍牙耳機', count: 6 },
      ],
      showModal: false,
    }
  },

  computed: {
    currentCategoryName() {
      if (!this.selectedCategory) return null
      const category = this.categories.find((c) => c.id === this.selectedCategory)
      return category ? category.name : null
    },
  },

  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId
      console.log('選中分類:', categoryId)
    },

    // 前往商品詳情頁面的方法
    goToProductDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } })
    },

    openModal() {
      this.showModal = true
    },
    // 加入購物車方法
    addToCart(productId) {
      console.log('加入購物車:', productId)
      // 這裡可以添加加入購物車的邏輯，例如向購物車服務發送請求
    },

    // 加入我的最愛方法
    addToFavorite(productId) {
      console.log('加入我的最愛:', productId)
      // 這裡可以添加加入我的最愛的邏輯，例如向收藏服務發送請求
    },

    // 前往購物車頁面
    goToCart() {
      this.showCartModal = false
      this.$router.push({ name: 'ShoppingCart' })
    },
  },
}
</script>
