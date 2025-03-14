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
        },
        {
          name: 'iPad維修/價格',
          icon: 'ipad.jpeg',
        },
        {
          name: 'MacBook維修/價格',
          icon: 'macbook.jpeg',
        },
        {
          name: '零件維修/價格',
          icon: 'phone-parts.jpeg',
        },
      ],
    }
  },
  methods: {
    navigateToService(service) {
      // 導航到對應服務頁面，可以根據需要實現
      this.$router.push({ name: 'ServiceDetail', params: { type: service.name } })
    },
  },
}
</script>
