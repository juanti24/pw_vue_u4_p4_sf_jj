import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css'

import router from '../src/modules/estudiante/router/router.js'

createApp(App).use(router).mount('#app')
