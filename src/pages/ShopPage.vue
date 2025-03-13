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
              v-for="product in products"
              :key="product.id"
              class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer relative group"
            >
              <!-- 商品圖片 -->
              <div
                @click="goToProductDetail(product.id)"
                class="h-60 bg-gray-200 flex items-center justify-center relative"
              >
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="product.name"
                  class="object-contain w-full h-full"
                />

                <!-- md 以上顯示的懸停按鈕 -->
                <div
                  class="hidden md:flex absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex-col justify-end items-center gap-4 pb-4"
                >
                  <button @click.stop="openProductModal(product)" title="加入我的最愛">
                    <font-awesome-icon :icon="faHeart" class="text-gray-200 hover:text-red-500" />
                  </button>

                  <button
                    @click.stop="openProductModal(product)"
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
                <!-- 產品名稱和價格 - 添加 flex-grow 和 w-full 使其佔據所有可用空間 -->
                <div
                  class="flex flex-col items-start md:items-center flex-grow w-full cursor-pointer"
                  @click="goToProductDetail(product.id)"
                >
                  <h3 class="font-medium">{{ product.name }}</h3>
                  <p class="text-red-500">$899</p>
                </div>

                <!-- 小螢幕上顯示的按鈕 (在產品名稱價格旁邊) -->
                <div class="flex md:hidden gap-2 ml-2">
                  <button
                    @click.stop="openProductModal(product)"
                    title="加入我的最愛"
                    class="text-gray-500 hover:text-red-500"
                  >
                    <font-awesome-icon :icon="faHeart" />
                  </button>

                  <button
                    @click.stop="openProductModal(product)"
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
      <div class="bg-blue-300 flex gap-6 p-6">
        <div class="w-1/2">
          <div>
            <img
              v-if="currentProduct.image"
              :src="currentProduct.image"
              :alt="currentProduct.name"
              class="object-contain w-full h-full"
            />
            <base-carousel
              v-if="currentProduct.images && currentProduct.images.length > 0"
              :images="currentProduct.images"
              image-height="100px"
            ></base-carousel>
          </div>
        </div>
        <div class="w-1/2">
          <div class="border-b border-white pb-4">
            <h2>{{ currentProduct.name }}</h2>
          </div>
          <div class="my-4">NT${{ currentProduct.price }}</div>

          <!-- 下半區塊 -->
          <div class="grid grid-cols-1 gap-2">
            <!-- 顏色 -->
            <div class="">
              <label for="color-select" class="font-medium block">顏色</label>
              <select
                id="color-select"
                v-model="currentProduct.selectedColorId"
                class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>請選擇顏色</option>
                <option
                  v-for="color in currentProduct.colors"
                  :key="color.id"
                  :value="color.id"
                  :disabled="!color.inStock"
                >
                  {{ color.name }}{{ !color.inStock ? ' (缺貨)' : '' }}
                </option>
              </select>
            </div>
            <!-- 尺寸 -->
            <div class="">
              <label for="color-select" class="font-medium block">尺寸 </label>
              <select
                id="size-select"
                v-model="currentProduct.selectedSize"
                class="w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option
                  v-for="size in currentProduct.sizes"
                  :key="size.id"
                  :value="size.id"
                  :disabled="!size.inStock"
                >
                  {{ size.name }}{{ !size.inStock ? ' (缺貨)' : '' }}
                </option>
              </select>
            </div>
            <!-- 數量 -->
            <div>
              <label class="font-medium block mb-1">數量</label>
              <div class="flex h-12 border border-gray-300 rounded overflow-hidden">
                <button
                  @click="decreaseQuantity"
                  class="w-1/4 flex justify-center items-center bg-white border-r border-gray-300 hover:bg-gray-100"
                >
                  <span class="text-xl font-bold">-</span>
                </button>
                <input
                  type="text"
                  v-model="currentProduct.quantity"
                  class="w-1/2 text-center focus:outline-none"
                  @input="validateQuantityInput"
                />
                <button
                  @click="increaseQuantity"
                  class="w-1/4 flex justify-center items-center bg-white border-l border-gray-300 hover:bg-gray-100"
                >
                  <span class="text-xl font-bold">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '../components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
import BaseModal from '@/components/modal/BaseModal.vue'
import BaseCarousel from '@/components/carousel/BaseCarousel.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus, faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    TheHeader,
    TheFooter,
    FontAwesomeIcon,
    BaseModal,
    BaseCarousel,
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

      // 產品列表
      products: [
        {
          id: 1,
          name: 'Super Case | 全能鋼甲軍規防摔殼',
          price: 899,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeWkOv-bE5VfEUM-QP3UTTkOyfMrW0gbd9A&s', // 使用佔位圖片
          colors: [
            { id: 'c-1', name: '黑色', code: '#000000', inStock: true },
            { id: 'c-2', name: '白色', code: '#FFFFFF', inStock: true },
            { id: 'c-3', name: '紅色', code: '#FF0000', inStock: false },
            { id: 'c-4', name: '藍色', code: '#0000FF', inStock: true },
          ],
          sizes: [
            { id: 's-1', name: 'iPhone 16 pro', inStock: true },
            { id: 's-2', name: 'iPhone 16 pro max', inStock: true },
            { id: 's-3', name: 'iPhone 16', inStock: false },
          ],
          images: [
            { src: 'https://picsum.photos/id/1/800/600', alt: '產品圖片 1' },
            { src: 'https://picsum.photos/id/20/800/600', alt: '產品圖片 2' },
            { src: 'https://picsum.photos/id/37/800/600', alt: '產品圖片 3' },
          ],
        },
        {
          id: 2,
          name: 'MagSafe 無線充電器',
          price: 1290,
          image: '',
          colors: [
            { id: 'c-1', name: '黑色', code: '#000000', inStock: true },
            { id: 'c-2', name: '白色', code: '#FFFFFF', inStock: true },
          ],
          sizes: [
            { id: 's-1', name: '標準版', inStock: true },
            { id: 's-2', name: '快充版', inStock: true },
          ],
          images: [
            { src: 'https://picsum.photos/id/1/800/600', alt: '產品圖片 1' },
            { src: 'https://picsum.photos/id/20/800/600', alt: '產品圖片 2' },
            { src: 'https://picsum.photos/id/37/800/600', alt: '產品圖片 3' },
          ],
        },
        {
          id: 3,
          name: 'AirPods Pro 保護套',
          price: 499,
          image: '',
          colors: [
            { id: 'c-1', name: '透明', code: 'transparent', inStock: true },
            { id: 'c-2', name: '黑色', code: '#000000', inStock: true },
            { id: 'c-3', name: '藍色', code: '#0000FF', inStock: true },
          ],
          sizes: [
            { id: 's-1', name: '一般款', inStock: true },
            { id: 's-2', name: '防摔款', inStock: true },
          ],
          images: [
            { src: 'https://picsum.photos/id/1/800/600', alt: '產品圖片 1' },
            { src: 'https://picsum.photos/id/20/800/600', alt: '產品圖片 2' },
            { src: 'https://picsum.photos/id/37/800/600', alt: '產品圖片 3' },
          ],
        },
      ],

      currentProduct: {
        id: 0,
        name: '',
        price: 0,
        image: '',
        images: [],
        colors: [],
        sizes: [],
        selectedColorId: '',
        selectedSizeId: '',
        quantity: 1,
      },
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

    openProductModal(product) {
      this.currentProduct = {
        ...product,
        images: product.images || [],
        selectedColorId: '',
        selectedSizeId: '',
        quantity: 1,
      }
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

    //增加數量
    increaseQuantity() {
      this.currentProduct.quantity++
    },

    //減少數量
    decreaseQuantity() {
      if (this.currentProduct.quantity > 1) {
        this.currentProduct.quantity--
      }
    },
  },
}
</script>
