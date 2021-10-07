<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ count }}</h1>
  <button @click="count++">increment</button>
  <HelloWorld msg="{{this.message}}" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: '',
      count: 0
    }
  },
  beforeCreate() {
    alert(this.message)
  },
  created() {
    // melhor momento para acessar dados
    this.message = 'Welcome to Your Vue.js + TypeScript App'
    alert(this.message)
  },
  beforeMount() {
    alert('montando')
  },
  mounted() {
    // melhor momento para manipular a DOM
    alert('montado this.$el')
  },
  beforeUpdate() {
    alert('before: ' + this.count)
  },
  updated() {
    // ações após alterações
    alert('after: ' + this.count)
  },
  beforeUnmount() {
    alert('desmontando')
  },
  unmounted() {
    alert('desmontado')
  }
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
</style>
