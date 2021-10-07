<template>
  <!-- pode ser 'v-bind:' ou simplesmente ':' -->
  <p>{{ profission }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      profission: '',
    }
  },
  created() {
    this.profission = 'Full Stack Developer'
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
