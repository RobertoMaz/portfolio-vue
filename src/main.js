import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'

import App from './App.vue'
import router from './router'
import FontAwesomeIcon from '@/plugins/fontAwesome'

const app = createApp(App)

app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
