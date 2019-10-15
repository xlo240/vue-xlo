import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'

Vue.component('app-car', Car)//компонент регистрируется глобально

new Vue({
  el: '#app',
  render: h => h(App)
})
