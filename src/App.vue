<template>
  <ButtonStyled />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StyledButton from '@/components/BotaoEstilizado.vue'

export default defineComponent({
  components: {
    ButtonStyled: StyledButton,
  },
  data() {
    return {
      isActive: true,
      hasError: false,
      className: 'textando',
    }
  },
})
</script>
<style scoped>
.button_styled {
  position: absolute;
  top: 45%;
}
:v-deep.button_styled span {
  color: red;
}
</style>
