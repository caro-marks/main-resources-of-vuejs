<template>
  <button :class="['button_styled', color]">
    {{ text }}
    {{ user.name }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type color = 'success' | 'danger' | 'primary'

interface User {
  id: number
  name: string
}

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
        return ['sucess', 'danger', 'primary'].includes(value)
      },
    },
    user: {
      type: Object as PropType<User>,
      required: false,
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
  background-color: #2d6cea;
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
