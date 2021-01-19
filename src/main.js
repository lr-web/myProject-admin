import Vue from 'vue'
import App from './App.vue'
import router from './router'

//组件库引用
import ElementUI from 'element-ui'
//加载组件库样式引用
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式文件
import './styles/index.less'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')