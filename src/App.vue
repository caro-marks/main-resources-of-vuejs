<template>
  <h1 :class="[className, { 'text-danger': hasError, active: isActive }]">
    FALASERIOVEI
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false,
      className: 'textando',
    }
  },
})
</script>
