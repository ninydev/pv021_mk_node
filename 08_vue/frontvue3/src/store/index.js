import { createStore } from 'vuex'
import myFirstValue from '@/store/modules/myFirstValue'
import toasts from '@/store/toasts'
import logs from '@/store/logs'
import songLyrics from '@/store/modules/songLyrics'

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
    songLyrics,
    toasts,
    logs
  }
})
