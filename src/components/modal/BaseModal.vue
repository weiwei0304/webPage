<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="$emit('update:modelValue', false)"
    >
      <div class="bg-white rounded-lg shadow-lg max-w-md w-full mx-4" @click.stop>
        <!-- 所有內容通過默認 slot 傳入 -->
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'BaseModal',

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  watch: {
    modelValue(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },
}
</script>
