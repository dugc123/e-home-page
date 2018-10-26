import axios from "axios"
// const env = process.env.NODE_ENV //在生产环境时，将会被设置为production
// let baseURL = env == "development" ? "/api" : "/"
import qs from "qs"
const baseURL = "/api"
const instance = axios.create({
  baseURL,
  timeout: 30000
})
  instance.interceptors.request.use(function(config){
    if (config.method == "post") {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return config
  },function(err){
    return Promise.reject(err)
  })

const xhr = {
  get(url, data, config) {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        if (token) {
          config = {
            ...config,
            headers: {
              'token': token
            }
          }
        }
        // console.log(config)
        instance.get(url, {
          params: data,
          ...config
        }).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    fetch(url, data, config, methods) {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        if (token) {
          config = {
            ...config,
            headers: {
              'token': token
            }
          }
        }
        // console.log(config)
        instance[methods](url, data, config).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },
    post(url, data, config) {
      return this.fetch(url, data, config, 'post')
    }

}

export default xhr