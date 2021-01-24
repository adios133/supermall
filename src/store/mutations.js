export default {
  addCounter(state,payload) {
    // payload 即为oldProduct，是浅拷贝，该变量实际是指向cartList中的对应元素
    payload.counter += 1
  },
  addGoods(state,payload) {
    state.cartList.push(payload)
  },
  // 状态改变
  checkChange(state,payload) {
    state.cartList.find(item=> {
      if (item.iid===payload.iid) {
        item.ischecked = !item.ischecked
      }
    })
  },
  // counter改变
  counterDres(state,payload) {
    state.cartList.find(item=> {
      if (item.iid===payload.iid) {
        item.counter -= 1
      }
    })
  },
  counterAdd(state,payload) {
    state.cartList.find(item=> {
      if (item.iid===payload.iid) {
        item.counter += 1
      }
    })
  }
}