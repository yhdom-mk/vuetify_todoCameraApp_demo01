import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router/index.js'
import withUUID from 'vue-uuid'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(withUUID)
  .mount('#app')
