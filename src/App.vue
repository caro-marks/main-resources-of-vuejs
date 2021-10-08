<template>
  <ul>
    <li @mouseover="view = 'Lar'">home</li>
    <li @click="view = 'Sobre'">about</li>
    <li @click="view = 'Contato'">contato</li>
  </ul>

  <transition
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__bounceOut"
    :appear="true"
    mode="out-in"
  >
    <component :is="view" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'
import HOME from '@/pages/Home.vue'
import CONTACT from '@/pages/Contact.vue'
import ABOUT from '@/pages/About.vue'

export default defineComponent({
  components: {
    Lar: HOME,
    Contato: CONTACT,
    Sobre: ABOUT,
  },
  data() {
    return {
      view: 'Lar',
    }
  },
})
</script>
