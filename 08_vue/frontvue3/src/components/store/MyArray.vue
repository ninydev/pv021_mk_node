<template>
  <h1> My Array</h1>
  <ul>
    <li v-for="(el, index) in myArray" :key="index">
      {{ el }}
    </li>
  </ul>
  <div>
    <label> new element </label>
    <input v-model="newElement">
    <button @click="push"> + </button>
    <button @click="pop"> pop </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'MyArray',
  setup () {
    const store = useStore()
    const str = ref('new Element')

    return {
      myArray: computed(() => store.getters.getMyArray),
      newElement: str,
      push: function () {
        store.commit('setMyArrayPush', str.value)
      },
      pop: function () {
        store.commit('getMyArrayPop')
        const el = store.getters.myArrayPop
        console.log(el)
      }
    }
  }
}
</script>

<style scoped>

</style>
