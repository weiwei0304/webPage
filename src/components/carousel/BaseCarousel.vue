<template>
  <div class="base-carousel">
    <!-- Main carousel container - 調整高度限制 -->
    <div class="relative overflow-hidden">
      <!-- Images container with transition -->
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-full">
          <img
            :src="image.src"
            :alt="image.alt || `Slide ${index + 1}`"
            :style="imageStyles"
            class="object-contain mx-auto"
          />
        </div>
      </div>

      <!-- Navigation arrows - 縮小箭頭尺寸和位置 -->
      <template v-if="showArrows && images.length > 1">
        <!-- Previous arrow -->
        <button
          @click="prev"
          class="absolute left-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow-md transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <!-- Next arrow -->
        <button
          @click="next"
          class="absolute right-1 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow-md transition-all duration-200"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCarousel',

  props: {
    // Array of image objects with src and alt properties
    images: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((item) => typeof item.src === 'string')
      },
    },
    // Control whether to show navigation arrows
    showArrows: {
      type: Boolean,
      default: true,
    },
    // Control whether to show indicator dots
    showIndicators: {
      type: Boolean,
      default: true,
    },
    // Auto-slide interval in milliseconds (0 to disable)
    autoSlide: {
      type: Number,
      default: 0,
    },
    // Image height in pixels or CSS value
    imageHeight: {
      type: String,
      default: '200px', // 減少默認高度
    },
    // Image width in pixels or CSS value
    imageWidth: {
      type: String,
      default: '100%',
    },
    // Object fit property for images
    objectFit: {
      type: String,
      default: 'contain',
      validator: (value) => {
        return ['contain', 'cover', 'fill', 'none', 'scale-down'].includes(value)
      },
    },
  },

  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    }
  },

  computed: {
    imageStyles() {
      return {
        height: this.imageHeight,
        width: this.imageWidth,
        objectFit: this.objectFit,
        maxHeight: '250px', // 添加最大高度限制
      }
    },
  },

  mounted() {
    this.startAutoSlide()
  },

  beforeUnmount() {
    this.stopAutoSlide()
  },

  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.resetAutoSlide()
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
      this.resetAutoSlide()
    },

    goToSlide(index) {
      this.currentIndex = index
      this.resetAutoSlide()
    },

    startAutoSlide() {
      if (this.autoSlide > 0 && this.images.length > 1) {
        this.intervalId = setInterval(() => {
          this.next()
        }, this.autoSlide)
      }
    },

    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },

    resetAutoSlide() {
      this.stopAutoSlide()
      this.startAutoSlide()
    },
  },
}
</script>

<style scoped>
.base-carousel {
  position: relative;
  width: 100%;
}
</style>
