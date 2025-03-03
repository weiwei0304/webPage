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
            <RouterLink
              v-for="i in 10"
              :key="i"
              :to="{ name: 'ProductDetail', params: { id: i } }"
              class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div class="h-40 bg-gray-200 flex items-center justify-center">
                <span class="text-gray-400">商品圖片</span>
              </div>
              <div class="p-3">
                <h3 class="font-medium">商品名稱 {{ i }}</h3>
                <div class="flex justify-between">
                  <p class="text-red-500 mt-2">$899</p>
                  <div
                    class="px-3 py-2 rounded-md flex gap-2 items-center border border-gray-300 hover:border-green-500 hover:bg-green-200 duration-300"
                  >
                    <div class="text-sm">加入購物車</div>
                    <font-awesome-icon :icon="faCartPlus" />
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '../components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    TheHeader,
    TheFooter,
    FontAwesomeIcon,
  },

  data() {
    return {
      faCartPlus,
      selectedCategory: null,
      categories: [
        { id: 1, name: '全部商品', count: 48 },
        { id: 2, name: '熱門精選', count: 12 },
        { id: 3, name: 'iPhone配件', count: 8 },
        { id: 4, name: '充電設備', count: 15 },
        { id: 5, name: '藍牙耳機', count: 6 },
      ],
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
      // 這裡可以加載對應分類的商品
      console.log('選中分類:', categoryId)
    },
  },
}
</script>
