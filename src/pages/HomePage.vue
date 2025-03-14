<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- 第一屏：全屏顯示 carousel -->
    <div class="relative w-full h-screen bg-cover bg-center">
      <!-- 模糊層 - 修改這裡以保留外層背景 -->
      <div class="absolute inset-0 backdrop-blur-sm bg-transparent"></div>

      <!-- carousel區塊 -->
      <div class="relative z-10 h-full">
        <the-header class="fixed z-20 top-0 w-full bg-teal-300"></the-header>
        <div class="h-full flex items-center justify-center w-full">
          <the-carousel></the-carousel>
        </div>
      </div>
    </div>

    <!-- 維修區塊 -->
    <repair-price id="repair-price" class="w-full bg-transparent"></repair-price>
    <!-- about us 區塊 -->
    <about-us id="about-us" class="w-full bg-transparent md:mb-20"></about-us>

    <!-- footer -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '../components/header/TheHeader.vue'
import TheFooter from '../components/footer/TheFooter.vue'
import TheCarousel from '../components/carousel/TheCarousel.vue'
import RepairPrice from '@/components/RepairPrice.vue'
import AboutUs from '../components/AboutUs.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheCarousel,
    RepairPrice,
    AboutUs,
  },
}
</script>
