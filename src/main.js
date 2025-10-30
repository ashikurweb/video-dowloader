import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ripple from './directives/ripple'

const app = createApp(App)

app.use(router)
app.directive('ripple', ripple)

app.mount('#app')
