<template>
  <!-- pode ser 'v-bind:' ou simplesmente ':' -->
  <p>Nowhere: <span v-html="link" /></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      link: '',
    }
  },
  created() {
    this.link = '<a href="#">Algum lugar</a>'
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
