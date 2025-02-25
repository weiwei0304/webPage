<template>
  <footer class="min-h-48 bg-[#EFEFEF] flex flex-col items-center gap-2">
    <div
      class="w-68 max-w-screen-lg flex flex-col items-center justify-between my-3 sm:flex-row sm:px-4 sm:gap-4"
    >
      <div class="flex gap-4 mb-3 sm:mb-0">
        <font-awesome-icon :icon="['fab', 'facebook-f']" class="h-5 w-5" />
        <font-awesome-icon :icon="['fab', 'instagram']" class="h-5 w-5" />
        <font-awesome-icon :icon="['fab', 'twitter']" class="h-5 w-5" />
      </div>
      <div class="text-center sm:text-right">
        <div class="inline-flex items-center relative border-b border-gray-400">
          <input
            type="email"
            placeholder="Email"
            class="bg-transparent outline-none px-2 py-1 text-sm"
          />
          <button type="submit" class="bg-transparent text-sm px-2 py-1 outline-none">訂閱</button>
        </div>
      </div>
    </div>
    <div class="hidden sm:flex w-full max-w-screen-lg justify-around">
      <div>
        <h2>LINKS</h2>
        <ul class="mt-2 text-center italic text-xs flex flex-col gap-2">
          <li>Shop</li>
          <li>Blog</li>
          <li>Sale</li>
        </ul>
      </div>
      <div>
        <h2>COLLECTIONS</h2>
        <ul class="mt-2 text-center italic text-xs flex flex-col gap-2">
          <li>For Travel</li>
          <li>For Work</li>
          <li>Convenient</li>
        </ul>
      </div>
      <div>
        <h2 class="text-center">HELP</h2>
        <ul class="mt-2 italic text-xs flex flex-col gap-2">
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    <div class="text-center text-xs text-gray-400 italic">
      &copy; 2025 A+Plus. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter)
</script>
