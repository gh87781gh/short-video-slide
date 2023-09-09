import { RestAPI } from './engine/axiosRunner'

export default class GlobalApi {
  restAPI: any = new RestAPI()

  getFollowingList = () => {
    return new Promise((resolve, reject) => {
      this.restAPI.request('get', '/following_list', {})
        .then((res: any) => {
          res.items.forEach((item: any) => item.isPlay = false)
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}