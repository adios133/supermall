export default {
  addCart(context,payload) {
    return new Promise((resolve,reject)=> {
      let oldProduct = null
    context.state.cartList.forEach(item => {
      if(item.iid === payload.iid) {
        oldProduct = item   //浅拷贝，指向cartList对应元素
      }
    })
    // 当找到对应元素
    if (oldProduct) {
      context.commit("addCounter",oldProduct)
      resolve('商品数量+1')
    }else {
      payload.counter = 1;
      // 默认选中状态
      payload.ischecked = true;
      context.commit("addGoods",payload)
      resolve('成功添加到购物车')
    }
    })
  }
}