// import './public-path'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
// import router from './router'
import store from './store'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#appfu')

let router = null
let instance = null

function render (props = {}) {
  console.log('--props---')
  console.log(props)
  const {
    container
  } = props
  console.log(container.querySelector('#appfu')) // <div id='appfu'></div>
  // 这里定义的/appfu/是在定义 router/index内所有前缀路由，如果和这个不一样就不显示，
  //
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/appfu/' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  // }).$mount('#appfu')
  }).$mount(container ? container.querySelector('#appfu') : '#appfu')
}
console.log('p-------')
console.log(window.__POWERED_BY_QIANKUN__)
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue-fu] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue-fu] props from main framework', props)
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
