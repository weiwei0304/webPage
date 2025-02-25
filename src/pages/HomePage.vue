<template>
  <div
    class="relative w-full h-screen bg-cover bg-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- 模糊層 -->
    <div class="absolute inset-0 backdrop-blur-sm bg-white/30"></div>

    <!-- 內容層 -->
    <div class="relative z-10 flex flex-col h-full">
      <the-header class="absolute top-0 w-full"></the-header>
      <div class="mt-auto mb-auto mx-auto w-full">
        <the-carousel></the-carousel>
      </div>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import backgroundImage from '../assets/bg.jpg'
import TheHeader from '../components/header/TheHeader.vue'
import TheFooter from '../components/footer/TheFooter.vue'
import TheCarousel from '../components/TheCarousel.vue'

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
  },
}
</script>
