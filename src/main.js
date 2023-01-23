import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import store  from "./stores/store";

import './assets/main.css'

const app = createApp(App)
app.use(store)

// app.use(createPinia())

app.mount('#app')
