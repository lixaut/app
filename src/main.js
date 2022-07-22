import Vue from 'vue'
import App from './App.vue'

// 引入组件
import TypeNav from '@/components/TypeNav'
// 三级联动组件-注册全局组件
// 第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入MockServe.js
import '@/mock/mockServe'

// 测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由：组件身上都有$router，$route属性
  router,
  // 注册仓库：组件实例身上多了一个属性$store
  store,
}).$mount('#app')
