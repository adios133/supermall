import axios from 'axios'

export function request(config) {
  const instance = axios.create({
      baseURL:process.env.VUE_APP_BASE_URL,
      timeout:5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config=> {
    return config
  },err=> {
    console.log(err);
  })
  // 响应拦截器
  instance.interceptors.response.use(response=> {
    return response.data
  },err=> {
    console.log(err);
  })
  // 本身返回就为promise
  return instance(config)

}
