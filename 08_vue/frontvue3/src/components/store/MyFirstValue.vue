<template>
  <h3> Моя первая переменная в хранилище {{ myFirstValue }} </h3>
  <button v-on:click="onBtnClick"> Commit to 10 </button>
  <input v-model="myVModel">
  <button @click="onBtnUpdate"> Update </button>
  <button @click="putToast"> Toast </button>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MyFirstValue',
  setup () {
    const store = useStore()

    return {
      putToast: function () {
        store.dispatch('toastInfo', 'Hello')
      },
      // просто доступ к переменной через геттер
      myFirstValue: computed(() => store.getters.getMyFirstValue),
      // изменение через метод
      onBtnClick: function () {
        store.commit('setMyFirstValue', 10)
      },
      onBtnUpdate: function () {
        store.dispatch('apiGetMyFirstValue')
      },
      // подключение через v-model
      myVModel: computed({
        get () {
          return store.getters.getMyFirstValue
        },
        set (data) {
          store.commit('setMyFirstValue', data)
        }
      })
    }
  }
})
</script>

<style scoped>

</style>
