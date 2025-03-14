<template>
  <div class="py-10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">我們的服務項目</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <!-- 服務項目卡片 -->
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          @click="navigateToService(service)"
        >
          <div class="mb-4 h-24 flex items-center justify-center">
            <img :src="service.icon" :alt="service.name" class="h-20 w-auto object-contain" />
          </div>
          <div class="text-center font-medium text-gray-800">
            {{ service.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepairPrice',
  data() {
    return {
      services: [
        {
          name: 'iPhone維修/價格',
          icon: 'iphone.jpeg',
          type: 'iphone',
        },
        {
          name: 'iPad維修/價格',
          icon: 'ipad.jpeg',
          type: 'ipad',
        },
        {
          name: 'MacBook維修/價格',
          icon: 'macbook.jpeg',
          type: 'macbook',
        },
        {
          name: '零件維修/價格',
          icon: 'phone-parts.jpeg',
          type: 'parts',
        },
      ],
    }
  },
  methods: {
    navigateToService() {
      // 導航到 repair-price 路徑，不帶查詢參數
      this.$router.push('/repair-price')

      // 如果需要在組件間傳遞數據，可以考慮使用 localStorage 或 Vuex
      // 例如：localStorage.setItem('selectedDevice', service.type)
    },
  },
}
</script>
