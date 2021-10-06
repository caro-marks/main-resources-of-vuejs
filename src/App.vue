<template>
  <p v-for="doneTodo in doneTodos" :key="doneTodo.text">
    {{ doneTodo.text }}
  </p>

  <button @click="checkAllTodos">Finalizar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Todo {
  text: string
  done: boolean
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[]
    }
  },
  computed: {
    doneTodos(): Todo[] {
      return this.todos.filter((todo) => todo.done)
    }
  },
  watch: {
    todos(new_value: Todo[]) {
      const isFinished = !new_value.some(({ done }) => !done)
      if (isFinished) {
        alert('Finalizados!')
      }
    }
  },
  created() {
    this.todos = [
      { text: 'Estudar Typescript', done: true },
      { text: 'Lavar os pratos', done: false },
      { text: 'Aprender Nuxt.js', done: true }
    ]
  },
  methods: {
    checkAllTodos() {
      this.todos = this.todos.map(({ text }) => {
        return { text, done: true }
      })
    }
  }
})
</script>

<style></style>
