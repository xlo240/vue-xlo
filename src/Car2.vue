<template>

  <div class="car2">
     <h3>Название: {{ carName }}</h3>
     <p>Год: {{ carYear }}</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            carName: 'Локально',
            carYear: 2020
        }
    }
}
</script>

<style>
  .car2 {
      border: 1px solid black;
  }
</style>