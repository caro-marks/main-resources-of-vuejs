<template>
  <div class="main">
    <ul>
      <li @click="currentView = 'Lar'">Home</li>
      <li @click="currentView = 'Sobre'">Sobre</li>
      <li @click="currentView = 'Contato'">Contato</li>
    </ul>
    <styled-button text="Cadastro" color="success" @clique="action($event)">
      <template v-slot:before>
        <i class="fas fa-hand-spock"></i>
      </template>
      <template v-slot:after>
        <i class="far fa-hand-spock"></i>
      </template>
    </styled-button>
    <component :is="currentView" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

export default defineComponent({
  components: {
    Lar: Home,
    Sobre: About,
    Contato: Contact,
  },
  data() {
    return {
      currentView: 'Home',
    }
  },
  methods: {
    action(acao: string) {
      alert(acao)
    },
  },
})
</script>
