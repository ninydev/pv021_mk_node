export default {
  // namespace: true,
  state: {
    email: '',
    password: '',
    repeatPassword: '',
    registerCheck: false,
    errLogin: null,
    errPassword: null
  },
  getters: {
    email: (state) => state.email,
    password: (state) => state.password,
    repeatPassword: (state) => state.repeatPassword,
    registerCheck: (state) => state.registerCheck,
    errLogin: (state) => state.errLogin,
    errPassword: (state) => state.errPassword
  },
  mutations: {
    email: (state, data) => { state.email = data; console.log(data) },
    password: (state, data) => { state.password = data },
    repeatPassword: (state, data) => { state.repeatPassword = data },
    registerCheck: (state, data) => { state.registerCheck = data },
    errLogin: (state, data) => { state.errLogin = data },
    errPassword: (state, data) => { state.errPassword = data }
  },
  actions: {
    email ({ commit, dispatch }, data) {
      if (!data) data = ''
      commit('email', data)
      dispatch('validateForm')
    },
    password ({ commit, dispatch }, data) {
      if (!data) data = ''
      commit('password', data)
      dispatch('validateForm')
    },
    repeatPassword ({ commit, dispatch }, data) {
      if (!data) data = ''
      commit('repeatPassword', data)
      dispatch('validateForm')
    },
    registerCheck ({ commit, dispatch }, data) {
      commit('registerCheck', data)
      dispatch('validateForm')
    },
    validateForm ({ state, commit, dispatch }, data = null) {
      commit('errLogin', null)
      commit('errPassword', null)
      const email = state.email
      const password = state.password
      if (email.length < 2) { commit('errLogin', ' короткий ') }
      if (password.length < 2) { commit('errPassword', ' короткий ') }
      // console.log(email + ' ' + password)
      // TODO  проверки
    }
  }

}
