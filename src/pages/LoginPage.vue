<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- 註冊區塊 -->
    <div
      class="w-full md:w-2/5 bg-[#314065] flex flex-col items-center justify-center gap-10 min-h-[40vh] md:min-h-screen"
    >
      <div class="text-white text-2xl font-bold">Create Account</div>
      <div
        class="px-12 py-1 border border-white text-white rounded-full cursor-pointer hover:bg-white hover:text-[#314065] transition-colors"
      >
        Sign up
      </div>
    </div>

    <!-- 登入區塊 -->
    <div class="w-full md:w-3/5 bg-[#EDEDED] flex flex-col flex-grow">
      <div class="m-auto w-full p-8">
        <h1 class="text-3xl font-bold mb-12">Welcome</h1>

        <div class="flex flex-col gap-4">
          <input
            type="text"
            placeholder="User Name"
            class="w-full p-3 rounded-lg border border-gray-300 bg-white"
          />

          <input
            type="password"
            placeholder="Password"
            class="w-full p-3 rounded-lg border border-gray-300 bg-white"
          />
        </div>

        <div class="flex justify-between items-center mt-6">
          <a href="#" class="text-sm text-gray-500 hover:text-gray-700"> Forget your password? </a>
          <button
            class="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
