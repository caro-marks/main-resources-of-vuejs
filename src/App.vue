<template>
  <div>
    <h1 v-if="sex === 'yes'">YES</h1>
    <h1 v-else-if="sex === 'no'">NO</h1>
    <h1 v-else>BIZARRE</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sex: 'Masculino',
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
