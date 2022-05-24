<template>
  <h1> Проверка валидности мыла </h1>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'MyEmailVerify',
  setup () {
    const route = useRoute()
    console.log(route.query)
  }
}
</script>

<style scoped>

</style>
