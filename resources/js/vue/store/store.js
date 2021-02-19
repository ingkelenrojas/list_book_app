import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { listBookStore } from './modules/listBookStore.js'

export const store = new Vuex.Store({
    modules: {
        listBookStore,
    }
})