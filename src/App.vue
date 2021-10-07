<template>
  <!-- pode ser 'v-on:' ou '@' -->
  <div>
    <!-- checar documentação do vue sobre event handlers -->
    <a href="#interno" v-on:click.once.prevent="something"> link interno </a>
    <input type="text" @keyup="something" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    something() {
      console.log('ANYTHING YOU WANT')
    },
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
