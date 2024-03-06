import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

createApp(App).component("fa", FontAwesomeIcon).mount('#app')
