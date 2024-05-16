import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/theme-oruga/dist/oruga-full.css';

createApp(App) 
.use(router)
.use(Oruga)
.mount('#app')
