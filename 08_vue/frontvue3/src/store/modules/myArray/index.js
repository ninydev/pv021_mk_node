export default {
  state: {
    myArray: JSON.parse(localStorage.getItem('myArray')) || [],
    myArrayPop: null
  },
  getters: {
    getMyArray (state) {
      return state.myArray
    },
    getMyArrayLen (state) {
      return state.myArray.length
    },
    getWorkElement (state) {
      return state.workElement
    }
  },
  mutations: {
    setMyArrayPush (state, data) {
      state.myArray.push(data)
      localStorage.setItem('myArray', JSON.stringify(state.myArray))
    },
    setMyArrayDelIndex (state, index) {
      state.myArray.splice(index, 1)
      localStorage.setItem('myArray', JSON.stringify(state.myArray))
    },
    getMyArrayPop (state, data = null) {
      state.myArrayPop = state.myArray.pop()
      localStorage.setItem('myArray', JSON.stringify(state.myArray))
    }
  },
  actions: {}
}
