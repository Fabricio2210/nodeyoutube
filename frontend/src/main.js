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
import VueScrollTo from 'vue-scrollto'

library.add(faTelegram)
library.add(faWhatsapp)
library.add(faGithub)

Vue.component('v-icon', Icon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)
Vue.use(require('vue-moment'));

axios.defaults.baseURL = 'https://37d5-2804-14d-5c73-6bc4-28f0-8518-3ba7-59fa.sa.ngrok.io/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
