import './styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { avoidFOUC } from './utilities/rememberDarkMode'

avoidFOUC();
// to avoid FOUC, remember the user's theme.

const app = createApp(App)

app.use(router)

app.mount('#app')
