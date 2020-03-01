import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import Icon from 'vue-awesome/components/Icon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

library.add(faTelegram)
library.add(faWhatsapp)
library.add(faGithub)

Vue.component('v-icon', Icon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));

axios.defaults.baseURL = //your url here
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
