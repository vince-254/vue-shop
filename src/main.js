import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import VueSweetalert2 from 'vue-sweetalert2'
import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)
Vue.use(VueSweetalert2)
require('firebase/firestore')
Vue.component('Navbar', require('./components/Navbar.vue').default)

Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
})

window.$ = window.jQuery = jQuery

// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
// })

// window.Toast = Toast

Vue.config.productionTip = false

const app = ''

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
