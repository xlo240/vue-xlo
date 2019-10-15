<template>

  <div>
  <h1>{{ msg }}</h1>
    <h3>{{ msg }}</h3>
    <!--<app-car></app-car>-->
    <app-car /><!-- Глобальный компонент
    Регистрируется в main.js
     -->
     <selector-car2 />
   
    
  </div>
</template>

<script>
import Car2 from './Car2.vue'
export default {
  data () {
    return {
      msg: 'ПРИВЕТ'
    }
  },
  components: {
    selectorCar2: Car2 //selectorCar = <selector-car2 /> 
  }
}
</script>

<style>

</style>
