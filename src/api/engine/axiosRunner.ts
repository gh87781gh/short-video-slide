import axios from 'axios'
// import { Message } from 'component'

export class ApiEngine {
  // browserStorage = new BrowserStorage()
  instance: any = axios.create()
  config: any = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      // 'Content-Type': 'application/json',
      // Accept: 'application/json'
    },
  }
  setToken = () => {
    // const token = this.browserStorage.getStorage(BrowserStorageType.token)
    // if (token) this.config.headers.Authorization = `Bearer ${token}`
  }
  setInterceptor = () => {
    this.instance.interceptors.request.use(
      function (config: any) {
        // Do something before request is sent
        return config
      },
      function (err: any) {
        // Do something with request err
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (res: any) => {
        return res
      },
      (error: any) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // Message.error(error.response.data.msg)
          console.log('error.response:', error.response)
          // console.log('error.response.status:', error.response.status)
          // console.log('error.response.headers:', error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error.request', error.request)
          // Message.error('網路連線異常，請稍後再試')
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('error', error)
        }
        // console.log('error.config:', error.config)
        return Promise.reject(error.response.data)
      }
    )
  }
}

export class RestAPI extends ApiEngine {
  /**
   * 物件資料格式的請求方法
   * @param method post/get/delete
   * @param url api網址
   * @param body request data
   * @param boolean (非必要)是否經過 interceptors.response 的全局報錯提示，否->回傳整包錯誤物件
   *
   */
  request = (method: string, url: string, body: any): Promise<any> => {
    this.setToken()
    this.setInterceptor()
    const config = this.config
    config.headers['Content-Type'] = 'application/json'
    config.headers.Accept = 'application/json'
    config.url = config.baseURL + url
    config.method = method
    config[method === 'get' ? 'params' : 'data'] = body
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: any) => {
          resolve(res.data)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}