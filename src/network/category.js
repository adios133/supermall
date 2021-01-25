import {request} from "./request"

// 请求侧边分类数据
export function getSlideCategory() {
  return request({
    url:'/category'
  })
}
// 请求对应分类数据具体内容
export function getCategoryDetail(maitKey) {
  return request({
    url:'/subcategory',
    params: {
      maitKey
    }
  })
}