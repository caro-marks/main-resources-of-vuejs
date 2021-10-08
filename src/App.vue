<template>
  <ButtonStyled text="Cadastro" :user="user" color="success" />
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
<style scoped>
.button_styled {
  position: absolute;
  top: 45%;
}
</style>
