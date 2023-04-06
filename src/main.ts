import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import Gtag from 'vue-gtag-next'

import App from './App.vue'

import { gatgConfig } from '@/config'

import 'normalize.css'
import '@/assets/css/reset.less'

const app = createApp(App)
const pinia = createPinia()

app.use(Gtag, gatgConfig.gtag_config)
app.use(pinia)
app.use(router)
app.mount('#app')
