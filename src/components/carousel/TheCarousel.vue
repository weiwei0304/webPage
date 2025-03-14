<!-- note: 這是用在HomePage的carousel -->

<template>
  <div
    class="carousel-container relative h-full w-full mx-auto overflow-hidden rounded-lg shadow-lg"
  >
    <div
      class="relative h-full overflow-hidden"
      :class="{ 'cursor-grab': !isDragging, 'cursor-grabbing': isDragging }"
      @touchstart="handleStart"
      @touchmove="handleMove"
      @touchend="handleEnd"
      @mousedown="handleStart"
      @mousemove="handleMove"
      @mouseup="handleEnd"
      @mouseleave="handleEnd"
    >
      <div
        class="flex h-full transition-all duration-300"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full h-full flex-shrink-0 relative"
        >
          <!-- 圖片作為背景 -->
          <img
            :src="slide.image"
            class="w-full h-full object-cover absolute inset-0"
            alt="Slide image"
          />

          <!-- 添加半透明覆蓋層，使文字更易讀 -->
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>

          <!-- 文字內容 -->
          <div
            class="relative z-10 h-full flex flex-col items-center justify-center text-white p-8"
          >
            <h2 class="text-2xl font-bold mb-2">{{ slide.title }}</h2>
            <p class="text-center">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        @click.stop="goToSlide(index)"
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
        {
          title: 'Beautiful Landscape',
          description: 'Explore the wonders of nature',
          image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
        },
        {
          title: 'City Skyline',
          description: 'Discover urban architecture',
          image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
        },
        {
          title: 'Ocean View',
          description: 'Feel the calmness of the sea',
          image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
        },
      ],
      startX: 0,
      currentX: 0,
      isDragging: false,
      minSwipeDistance: 50,
      isSwiping: false,
    }
  },

  methods: {
    goToSlide(index) {
      this.currentIndex = index
    },

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

    handleStart(e) {
      this.isDragging = true
      this.isSwiping = false
      // 檢測是觸控還是滑鼠事件
      this.startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
    },

    handleMove(e) {
      if (!this.isDragging) return
      // 檢測是觸控還是滑鼠事件
      this.currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX

      if (Math.abs(this.startX - this.currentX) > 10) {
        this.isSwiping = true
      }
    },

    handleEnd(e) {
      if (!this.isDragging) return

      // 處理觸控和滑鼠的結束事件
      const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : this.currentX

      // 計算滑動距離
      if (this.isSwiping) {
        if (this.startX - endX > this.minSwipeDistance) {
          this.nextSlide()
        } else if (endX - this.startX > this.minSwipeDistance) {
          this.prevSlide()
        }
      }

      // 重置狀態
      this.isDragging = false
      this.isSwiping = false
      this.startX = 0
      this.currentX = 0
    },
  },
}
</script>
