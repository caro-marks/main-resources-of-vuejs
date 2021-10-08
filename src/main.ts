import { createApp } from 'vue'
import App from './App.vue'
import highlight from '@/directives/highlight'
import '@fortawesome/fontawesome-free/css/all.css'
import StyledButton from '@/components/BotaoEstilizado.vue'

const app = createApp(App)

app.directive('railai', highlight)
app.component('styled-button', StyledButton)

app.mount('#app')
