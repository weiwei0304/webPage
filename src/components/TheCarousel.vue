<template>
  <div
    class="carousel-container relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg"
  >
    <div class="relative h-96 overflow-hidden">
      <div
        class="flex h-full transition-all duration-300"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full h-full flex-shrink-0 bg-blue-500 flex flex-col items-center justify-center text-white p-8"
        >
          <h2 class="text-2xl font-bold mb-2">{{ slide.title }}</h2>
          <p class="text-center">{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <div
      @click="prevSlide"
      class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-50 rounded-full p-2"
    >
      <svg
        class="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>

    <div
      @click="nextSlide"
      class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-50 rounded-full p-2"
    >
      <svg
        class="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-3 h-3 rounded-full cursor-pointer transition-all duration-200"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCarousel',

  data() {
    return {
      currentIndex: 0,
      slides: [
        { title: 'title1', description: 'description1' },
        { title: 'title2', description: 'description2' },
        { title: 'title3', description: 'description3' },
      ],
    }
  },

  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.slides.length - 1
      }
    },

    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },
  },
}
</script>
