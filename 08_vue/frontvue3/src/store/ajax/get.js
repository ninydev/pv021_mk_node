import axios from 'axios'

export default async function get (url, config = null) {
  if (config === null) config = {}
  config.headers = {
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    'X-RapidAPI-Key': '7e2afce0b1msh7f5c23d92a82e63p15d2e7jsn1fb4d1a13ff8',
    AuthJWT: localStorage.getItem('userToken')
  }

  return new Promise((resolve, reject) => {
    axios.get(url, config)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
