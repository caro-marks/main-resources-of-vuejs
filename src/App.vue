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

    <button @click="show = !show">Toogle</button>

    <transition name="fade">
      <component :is="currentView" v-if="show" />
    </transition>
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
      show: false,
    }
  },
  methods: {
    action(acao: string) {
      alert(acao)
    },
  },
})
</script>

<style scoped>
/* 
v-enter-from (de onde estar vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde estar vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name`
*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
