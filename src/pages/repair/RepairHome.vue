<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <the-header></the-header>

    <!-- 使用 TabComponent - 添加 flex-grow 讓內容區域可以擴展 -->
    <div class="container mx-auto my-8 px-4 flex-grow">
      <tab-component :tabs="tabItems" @tab-change="onTabChange">
        <!-- 第一個標籤的內容 -->
        <template #tab-content-0>
          <div class="p-4 bg-gray-50 rounded">
            <h3 class="font-medium mb-2">第一個標籤內容</h3>
            <p>這裡是第一個標籤的詳細內容...</p>
          </div>
        </template>

        <!-- 第二個標籤的內容 -->
        <template #tab-content-1>
          <div class="p-4 bg-gray-50 rounded">
            <h3 class="font-medium mb-2">第二個標籤內容</h3>
            <p>這裡是第二個標籤的詳細內容...</p>
          </div>
        </template>

        <!-- 第三個標籤的內容 -->
        <template #tab-content-2>
          <div class="p-4 bg-gray-50 rounded">
            <h3 class="font-medium mb-2">第三個標籤內容</h3>
            <p>這裡是第三個標籤的詳細內容...</p>
          </div>
        </template>

        <template #tab-content-3>
          <div class="p-4 bg-gray-50 rounded">
            <h3 class="font-medium mb-2">第四個標籤內容</h3>
            <p>這裡是第四個標籤的詳細內容...</p>
          </div>
        </template>
      </tab-component>
    </div>

    <repair-process></repair-process>

    <!-- Footer 會自動保持在底部 -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue'
import TabComponent from '@/components/tab/TabComponent.vue'
import RepairProcess from './RepairProcess.vue'
import TheFooter from '@/components/footer/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TabComponent,
    RepairProcess,
    TheFooter,
  },
  data() {
    return {
      // 定義標籤資料
      tabItems: [
        {
          title: '第一個標籤',
          icon: 'iphone.jpeg',
        },
        {
          title: '第二個標籤',
          icon: 'ipad.jpeg',
        },
        {
          title: '第三個標籤',
          icon: 'macbook.jpeg',
        },
        {
          title: '第四個標籤',
          icon: 'phone-parts.jpeg',
        },
      ],
    }
  },
  methods: {
    // 處理標籤切換事件
    onTabChange(index) {
      console.log(`切換到標籤 ${index + 1}`)
    },
  },
}
</script>
