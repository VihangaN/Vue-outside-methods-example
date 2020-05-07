import Vue from 'vue'
import App from './App.vue'
import maincomp from './components/main.vue'


Vue.config.productionTip = false
Vue.component('maincomp',maincomp);

new Vue({
  render: h => h(App),
}).$mount('#app')
