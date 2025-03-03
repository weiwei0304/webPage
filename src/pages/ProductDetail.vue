<template>這是商品頁面</template>

<script>
export default {
  created() {
    const productId = this.$route.params.id
    this.fetchProductDetails(productId)
  },

  methods: {
    fetchProductDetails(productId) {
      console.log('產品:', productId, '的詳細信息')
    },
  },
}
</script>
