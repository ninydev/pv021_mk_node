import forms from '@/store/modules/auth/forms'
export default {
  state: {
    JwtToken: JSON.parse(localStorage.getItem('JwtToken')) || null,
    user: JSON.parse(localStorage.getItem('JwtToken')) || null
  },
  modules: {
    forms
  }
  // ...

}
