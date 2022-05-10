import { useToast } from 'vue-toast-notification'
const toast = useToast()

export default {
  actions: {
    errorLog ({ state, commit, dispatch }, msg) {
      console.log(msg)
      toast.error(msg)
    },
    errorLogAjax ({ state, commit, dispatch }, error) {
      let msg = '???'

      if (error.status === 403) {
        msg = '<h3> Доступ запрещен </h3>'
      } else if (error.status === 404) {
        msg = '<h3> Не найдено </h3>'
      }
      toast.error(msg)
    },
    errorConsole ({ state, commit, dispatch }, msg) {
      console.log(msg)
    }
  }
}
