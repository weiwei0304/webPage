<!-- RepairProcess.vue -->
<template>
  <div class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <!-- 四步驟流程區 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <!-- 步驟1: 現場檢測 -->
        <div class="relative border-r border-gray-700 p-4">
          <div class="flex items-center mb-4">
            <div class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div class="ml-4 flex items-baseline">
              <h3 class="text-xl font-medium">現場檢測</h3>
              <span class="text-yellow-400 text-6xl font-bold ml-4">1</span>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            拆機維修前我們會進行全機基本功能測試，以確保您的權益無虞，能為迅速地找出您的機問題。
          </p>
          <div
            class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- 步驟2: 公開報價 -->
        <div class="relative border-r border-gray-700 p-4">
          <div class="flex items-center mb-4">
            <div class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div class="ml-4 flex items-baseline">
              <h3 class="text-xl font-medium">公開報價</h3>
              <span class="text-yellow-400 text-6xl font-bold ml-4">2</span>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            我們有公開透明的報價系統，能讓您在維修前得知完修金額（經檢測發現值，客戶不修退件，需酌收檢測費）。
          </p>
          <div
            class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- 步驟3: 專業維修 -->
        <div class="relative border-r border-gray-700 p-4">
          <div class="flex items-center mb-4">
            <div class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="ml-4 flex items-baseline">
              <h3 class="text-xl font-medium">專業維修</h3>
              <span class="text-yellow-400 text-6xl font-bold ml-4">3</span>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            全台門市皆有專業維修人員，並採視覺通對面維修服務，除了絕對快速維修的行動裝置以外，也能有效保固您的價資安全。
          </p>
          <div
            class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <!-- 步驟4: 通知取件 -->
        <div class="relative p-4">
          <div class="flex items-center mb-4">
            <div class="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="ml-4 flex items-baseline">
              <h3 class="text-xl font-medium">通知取件</h3>
              <span class="text-yellow-400 text-6xl font-bold ml-4">4</span>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            機器完修後，我們將與您再次核對全機功能測試，確保維修過程中沒有造成其他損壞，始終將您的權益擺在第一。
          </p>
        </div>
      </div>

      <!-- 注意事項區 -->
      <div class="bg-gray-700 p-6 rounded-md">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm mb-2 flex items-start">
              <span class="text-yellow-400 mr-2 font-bold">⚠</span>
              <span>玻璃破裂：僅只考慮面玻璃破裂。</span>
            </p>
            <p class="text-sm mb-2 flex items-start">
              <span class="text-yellow-400 mr-2 font-bold">⚠</span>
              <span
                >液晶損壞：螢幕掉裂傷及液晶，液晶出現黑點、黑班、條紋、壓痕，無法正常顯電皆屬於液晶損壞。</span
              >
            </p>
            <p class="text-sm mb-2 flex items-start">
              <span class="text-yellow-400 mr-2 font-bold">⚠</span>
              <span>輕檢測發報價，客戶不修退件，MacBook系列需酌收檢測費400元。</span>
            </p>
          </div>
          <div>
            <p class="text-sm mb-2 flex items-start">
              <span class="text-yellow-400 mr-2 font-bold">⚠</span>
              <span
                >拆機維修若有資料遺失屬於：如有重要資料，維修前請先行告知備份處理（資料遺失恕不賠償，如不同意請勿送修）。</span
              >
            </p>
            <p class="text-sm mb-2 flex items-start">
              <span class="text-yellow-400 mr-2 font-bold">⚠</span>
              <span
                >維修零件皆保固90天，延長保固期間內，非人為因素損壞，更換零件需酌收200元檢測費。</span
              >
            </p>
            <p class="text-sm flex items-start">
              <span class="text-yellow-400 mr-2 font-bold">⚠</span>
              <span
                >機器經過拆卸檢查後，將會失去原廠任何保固，並無法恢復到原廠先故障狀態。如不同意請勿送修。</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RepairProcess',
}
</script>
