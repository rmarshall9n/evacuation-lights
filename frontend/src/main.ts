import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';
import { createRouter } from './router'

import App from './App.vue'

import UiButton from '@/components/ui/UiButton.vue'
import UiPanel from '@/components/ui/UiPanel.vue'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
const auth = createAuth0({
  domain: "dev-xnlgb0e3.us.auth0.com",
  client_id: "CakLghU4wwCuqB404IKL3bumKlOaNl8m",
  redirect_uri: window.location.origin
})
const router = createRouter(app, auth)

app.use(pinia)
  .use(auth)
  .use(router)

app.component('UiButton', UiButton)
  .component('UiPanel', UiPanel)

app.mount('#app')
