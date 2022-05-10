import { createStore } from 'vuex'
import myFirstValue from '@/store/modules/myFirstValue'
import toasts from '@/store/toasts'

export default createStore({
  strict: true,
  // Тут лучше всего что бы было пусто
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    myFirstValue,
    toasts
  }
})
