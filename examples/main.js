import Vue from 'vue'
import App from './App.vue'
import TurnTable from '../packages/'

Vue.config.productionTip = false

Vue.use(TurnTable)

Vue.prototype.$TurnTable = TurnTable

new Vue({
  render: h => h(App),
}).$mount('#app')
