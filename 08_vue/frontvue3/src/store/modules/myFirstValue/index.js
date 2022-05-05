export default {
  // namespaced: true,
  // набор данных которые я хочу хранить и их начальные значения
  state: {
    myFirstValue: 0
  },
  // методы получения данных
  getters: {
    getMyFirstValue (state) {
      return state.myFirstValue
    }
  },
  // методы смены данных через commit
  mutations: {
    setMyFirstValue (state, data) {
      state.myFirstValue = data
    }
  },
  // запуск кода через dispatch
  actions: {
    apiGetMyFirstValue ({ state }, { commit }, { dispatch }, data) {
      // тут будет получение с сервера
    }
  }
}
