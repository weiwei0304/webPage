<!-- TabComponent.vue -->
<template>
  <div class="tabs-container w-full">
    <!-- 標籤頁標題列 - 改為可滑動 -->
    <div class="overflow-x-auto hide-scrollbar border-b border-gray-200">
      <div class="flex whitespace-nowrap">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-button py-2 px-4 font-medium text-sm focus:outline-none flex flex-col md:flex-row items-center flex-shrink-0"
          :class="[
            activeTab === index
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300',
          ]"
          @click="handleTabClick(index)"
        >
          <img
            v-if="tab.icon"
            :src="tab.icon"
            class="w-5 h-5 mb-1 md:mb-0 md:mr-2"
            :alt="`${tab.title} icon`"
          />
          <span>{{ tab.title }}</span>
        </button>
      </div>
    </div>

    <!-- 標籤頁內容區域 -->
    <div class="py-4">
      <div v-for="(tab, index) in tabs" :key="`content-${index}`" v-show="activeTab === index">
        <!-- 使用插槽提供內容 -->
        <slot :name="`tab-content-${index}`">
          <!-- 預設內容，在沒有提供插槽內容時顯示 -->
          <div v-if="tab.content">{{ tab.content }}</div>
          <div v-else class="text-gray-400 italic">無內容</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabComponent',
  props: {
    // 標籤資料陣列
    tabs: {
      type: Array,
      required: true,
    },
    defaultTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      activeTab: this.defaultTab,
    }
  },
  methods: {
    handleTabClick(index) {
      this.activeTab = index
      // 發出標籤切換事件
      this.$emit('tab-change', index)
    },
  },
}
</script>

<style scoped>
/* 隱藏滾動條但保留滾動功能 */
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
