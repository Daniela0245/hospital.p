import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router';

import { createApp } from 'vue'
import App from './App.vue';
import './assets/styles/nav.css';  // Importa estilos de navegación


createApp(App).use(router).mount('#app')