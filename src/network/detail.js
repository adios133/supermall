import {request} from 'network/request'

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
// 将请求数据整合
export class itemInfo {
  constructor(itemInfo,columns,shopInfo) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = shopInfo.services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods
  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.infos = info.set;
    this.sizes = rule.tables;
    this.image = info.images ? info.images[0] : '';
    this.ikey = info.key;
    this.rkey = rule.key;
    this.disclaimer = rule.disclaimer;

  }
}

// 请求推荐数据
export function getRecommend() {
  return request('/recommend')
}