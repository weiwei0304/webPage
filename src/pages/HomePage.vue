<template>
  <div>
    <!-- 第一屏：全屏顯示 carousel -->
    <div
      class="relative w-full h-screen bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- 模糊層 -->
      <div class="absolute inset-0 backdrop-blur-sm bg-white/30"></div>

      <!-- carousel區塊 -->
      <div class="relative z-10 h-full">
        <the-header class="absolute top-0 w-full"></the-header>
        <div class="h-full flex items-center justify-center w-full pt-20">
          <the-carousel></the-carousel>
        </div>
      </div>
    </div>

    <!-- about us 區塊 -->
    <about-us id="about-us" class="w-full"></about-us>

    <!-- footer -->
    <the-footer></the-footer>
  </div>
</template>

<script>
import backgroundImage from '../assets/bg.jpg'
import TheHeader from '../components/header/TheHeader.vue'
import TheFooter from '../components/footer/TheFooter.vue'
import TheCarousel from '../components/carousel/TheCarousel.vue'
import AboutUs from '../components/AboutUs.vue'

export default {
  data() {
    return {
      backgroundImage: backgroundImage,
    }
  },

  components: {
    TheHeader,
    TheFooter,
    TheCarousel,
    AboutUs,
  },
}
</script>
