<template>
  <div>
    <h1 v-for="number in numbers" :key="number.id">{{ number }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6],
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger {
  color: red;
}

.success {
  color: green;
}
</style>
