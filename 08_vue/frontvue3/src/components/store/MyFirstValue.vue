<template>
  <h3> Моя первая переменная в хранилище {{ myFirstValue }} </h3>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyFirstValue',
  setup () {
    const store = useStore()

    return {
      myFirstValue: computed(() => store.getters.getMyFirstValue)
    }
  }
})
</script>

<style scoped>

</style>
