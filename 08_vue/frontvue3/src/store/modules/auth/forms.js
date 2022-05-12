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
    email: (state, data) => { state.email = data },
    password: (state, data) => { state.password = data },
    repeatPassword: (state, data) => { state.repeatPassword = data },
    registerCheck: (state, data) => { state.registerCheck = data },
    errLogin: (state, data) => { state.email = data },
    errPassword: (state, data) => { state.email = data }
  }

}
