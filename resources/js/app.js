require('./bootstrap');
window.Vue = require('vue').default;

import Vue from 'vue'
import App from './vue/app.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash, faSearch, faChevronUp, faChevronDown, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { store } from './vue/store/store'


library.add( faPlusSquare, faTrash, faSearch, faChevronUp, faChevronDown, faMinus, faTimes )

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const app = new Vue({
    el: '#app',
    store,
    components: { App }
});