<template>
  <ButtonStyled text="Cadastro" color="success" @clique="action($event)">
    <template v-slot:before>
      <i class="fas fa-hand-spock"></i>
    </template>
    <template v-slot:after>
      <i class="far fa-hand-spock"></i>
    </template>
  </ButtonStyled>
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
  methods: {
    action(acao: string) {
      alert(acao)
    },
  },
})
</script>
