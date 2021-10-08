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

    <transition
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__slideOutRight"
      @after-enter="beforeEnter"
    >
      <component :is="currentView" v-if="show" />
    </transition>
    <!-- <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false"
    >
    </transition> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

import 'animate.css'

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
    // --------
    // ENTERING
    // --------
    beforeEnter(el: HTMLElement) {
      // ...
      el.classList.add('test')
    },
    /* 
    enter(el, done) {
      // ...
      done()
    },
    enterCancelled(el) {
      // ...
    }, 
    afterEnter(el: HTMLElement) {
      // ...
      el.classList.add('test')
    },*/

    // --------
    // LEAVING
    // --------
    /*  beforeLeave(el) {
      // ...
    },
    leave(el, done) {
      // ...
      done()
    },
    afterLeave(el) {
      // ...
    },
    // disponível apenas com v-show
    leaveCancelled(el) {
      // ...
    }, */
  },
})
</script>

<style scoped>
.test {
  background: cadetblue;
}
/* 
v-enter-from (de onde estar vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde estar vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name`
*/
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.daonde,
.praonde {
  transition: opacity 0.5s;
} */
</style>
