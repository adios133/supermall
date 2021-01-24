export default {
  cartLength(state) {
    return state.cartList.length
  },
  totalPrice(state) {
    // 还得做一步判断，ischecked
    return state.cartList.filter(item=>item.ischecked === true).reduce((preVal,curVal)=> {
      return preVal += curVal.counter * curVal.price
    },0).toFixed(2)
  },
  toPayCount(state) {
    return state.cartList.filter(item=>item.ischecked === true).length
  },
  cartList(state) {
    return state.cartList
  }
}