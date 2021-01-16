import {request} from 'network/request'
export function getHomeData() {
  return request('/home/multidata')
}

export function getGoodsList(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,page
    }
  })
}