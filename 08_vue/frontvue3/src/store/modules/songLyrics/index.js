// import ajax from '@/store/ajax'

export default {
  state: {
    songLyricsQuery: null,
    songLyricsErr: null
  },
  // методы получения данных
  getters: {
    getSongLyricsQuery (state) {
      return state.songLyricsQuery
    },
    getSongLyricsErr (state) {
      return state.songLyricsErr
    },
    getCanSendSongLyrics (state) {
      if (!state.songLyricsQuery) return true
      if (state.songLyricsQuery.length < 3) return true
      return false
    }
  },
  // методы смены данных через commit
  mutations: {
    setSongLyricsQuery (state, data) {
      state.songLyricsQuery = data
      if (data.length < 3) {
        state.songLyricsErr = ' < 3'
      } else {
        state.songLyricsErr = null
      }
    }
  },
  // запуск кода через dispatch
  actions: {
  }
}
