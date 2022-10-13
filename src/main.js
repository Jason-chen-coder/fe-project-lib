import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/theme/index.css'
import './styles/scroll.less'
import 'highlight.js/styles/tomorrow.css'
import ElementUI from 'element-ui'
import FeCloudLearnLib from '../packages/index'
Vue.config.productionTip = false
import DemoBlock from './DemoBlock.vue'

Vue.use(FeCloudLearnLib)
Vue.use(ElementUI)
Vue.component('demo-block', DemoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')