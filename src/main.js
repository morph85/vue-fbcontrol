import Vue from 'vue'
import App from './App'

// FB
import FBControl from '@/'
Vue.use(FBControl, {
  appId: '[your-fb-id-here]',
  version: 'v2.7'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
