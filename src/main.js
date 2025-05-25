import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)

AOS.init()
app.mount('#app')

router.afterEach(() => {
  AOS.refresh()
})
