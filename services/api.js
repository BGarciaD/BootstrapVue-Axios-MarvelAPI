// https://github.com/axios/axios
// https://appdividend.com/2018/08/30/getting-started-with-axios-tutorial-example/
// https://www.thepolyglotdeveloper.com/2018/04/vuejs-app-using-axios-vuex/
// Attribution in every screen with Marvel Data -> Data provided by Marvel. © 2014 Marvel
// Linking to Marvel -> Use links from URLArrays or https://developer.marvel.com/ If no URL is associated

// Marvel Base URL : http(s)://gateway.marvel.com/

// All calls to the Marvel API must pass the public API key as a parameter called "apikey"
import { config } from '../config.js'
const axios = require('axios')
axios.defaults.baseURL = 'http://gateway.marvel.com'

export default {
  test () {
    return new Promise((resolve, reject) => {
      axios.get('/v1/public/characters', {
        params: {
          'apikey': config.MARVEL_APIKEY,
          'limit': 30
        }
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
}
