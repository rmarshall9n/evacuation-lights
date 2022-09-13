import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';

import App from './App.vue'
import router from './router'

import UiButton from '@/components/ui/UiButton.vue'
import UiPanel from '@/components/ui/UiPanel.vue'

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)

app.use(pinia)

app.use(
  createAuth0({
    domain: "dev-xnlgb0e3.us.auth0.com",
    client_id: "CakLghU4wwCuqB404IKL3bumKlOaNl8m",
    redirect_uri: window.location.origin
  })
)

app.component('UiButton', UiButton)
  .component('UiPanel', UiPanel)

app.mount('#app')
