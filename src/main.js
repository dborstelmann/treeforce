// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import AtComponents from 'at-ui'
import 'at-ui-style'

import App from './App'
import Store from './store'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(AtComponents)
Vue.config.productionTip = false

const store = new Vuex.Store(Store)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
