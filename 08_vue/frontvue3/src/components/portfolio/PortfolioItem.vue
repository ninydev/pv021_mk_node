<template>
  <p> {{ item.name }}</p>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    item: {}
  }
  // data () {
  //   return {
  //     item: this.item
  //   }
  // }
}
</script>

<style scoped>

</style>
