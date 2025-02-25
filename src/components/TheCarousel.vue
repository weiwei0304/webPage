<template>
  <div
    class="carousel-container relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg"
  >
    <div class="relative h-96">
      <div
        class="absolute top-0 left-0 w-full h-full bg-blue-500 flex flex-col items-center justify-center text-white p-8"
      >
        <h2 class="text-2xl font-bold mb-2">幻燈片標題</h2>
        <p class="text-center">這是幻燈片的描述內容</p>
      </div>
    </div>

    <div
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
      <div class="w-3 h-3 rounded-full bg-white"></div>
      <div class="w-3 h-3 rounded-full bg-gray-300 bg-opacity-50"></div>
      <div class="w-3 h-3 rounded-full bg-gray-300 bg-opacity-50"></div>
      <div class="w-3 h-3 rounded-full bg-gray-300 bg-opacity-50"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCarousel',
}
</script>
