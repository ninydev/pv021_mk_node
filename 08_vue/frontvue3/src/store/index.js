import { createStore } from 'vuex'
import myFirstValue from '@/store/modules/myFirstValue'

export default createStore({
  strict: true,
  // Тут лечше всего что бы было пусто
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    myFirstValue
  }
})
