<template>
  <MyArray></MyArray>
  <hr>
  <h1> Работа с менеджером состояний</h1>
  <MyFirstValue></MyFirstValue>
</template>

<script>
import MyFirstValue from '@/components/store/MyFirstValue'
import MyArray from '@/components/store/MyArray'
export default {
  name: 'StoreView',
  components: { MyArray, MyFirstValue }
}
</script>

<style scoped>

</style>
