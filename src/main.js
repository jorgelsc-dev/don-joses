import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

router.afterEach((to) => {
  const page = to.meta?.title ? `${to.meta.title} | Don Jose's` : "Don Jose's"
  document.title = page
})

createApp(App).use(router).mount('#app')
