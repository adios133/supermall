import Toast from "./Toast"
const obj = {}
obj.install=function(Vue) {
  // 1、创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2、使用组件构造器创建实例
  const toast = new toastConstructor()
  // 3、将创建的构造实例挂载到某个实例上div
  toast.$mount(document.createElement('div'))
  // 4、toast.$el对应的就是div 加入到元素
  document.body.appendChild(toast.$el)
  // 将实例挂载到vue原型，这里好像$toast名字不行，考虑可能是vant UI可能也挂在了，直接就能打印$toast，是个函数
  Vue.prototype.$toasts = toast
}
export default obj