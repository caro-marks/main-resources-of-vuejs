<template>
  <button :class="['button-styled', color]">
    <slot name="before" />
    {{ text }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type color = 'danger' | 'primary' | 'success'

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value: color) => {
        return ['success', 'primary', 'danger'].includes(value)
      },
    },
  },
})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>
