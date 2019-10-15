<template>

  <div class="car">
     <h3>Название: {{ carName }}</h3>
     <p>Год: {{ carYear }}</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            carName: 'Ford',
            carYear: 2015
        }
    }
}
</script>

<style>
  .car {
      border: 1px solid black;
  }
</style>