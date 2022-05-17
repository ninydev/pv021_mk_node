
export default {
  state: {
  },
  getters: {
    currentAvatarUrl: (state) => {
      if (state.user) { // если я залогинен
        if (state.user.avatar) { // если у меня есть аватар
          return state.user.avatar + '?updated_at=' + state.user.updated_at
        }
      }
      return null
    }
  },
  mutations: {
  },
  actions: {
    apiUploadAvatar ({ state, commit, dispatch }, data) {
      dispatch('toastInfo', 'Upload to Server Start')

      const formData = new FormData()
      formData.append('img', data)

      fetch('http://localhost:4000/api/helpers/converter/avatar', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          // 'Content-Type': 'multipart/form-data charset=utf-8; boundary=' + Math.random().toString().substr(2)
          // 'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *client
        body: formData // body data type must match "Content-Type" header
      })
        .then(res => res.json())
        .then(json => {
          console.log(json)
          dispatch('toastSuccess', ' Avatar Uploads ')
          // TODO  уйти на другой маршрут, сообщить что все хорошо
        })
        .catch(err => {
          dispatch('errorLogAjax', err)
        })
    }
  }
  // ...

}
