<template>
  <ButtonStyled text="Cadastro" :color="success" />
  <ButtonStyled text="Login" />
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
      user: {
        id: 2,
        name: 'Marcos',
      },
    }
  },
})
</script>
