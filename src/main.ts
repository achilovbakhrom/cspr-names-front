import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as config from './config'
import { plugin, defaultConfig } from '@formkit/vue'

const { pinia } = config

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(plugin, defaultConfig)

app.mount('#app')
