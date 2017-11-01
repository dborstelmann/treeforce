// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import AtComponents from 'at-ui'
import 'at-ui-style'

import App from './App'
import Store from './store'
import Router from './router'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(AtComponents)
Vue.config.productionTip = false

const store = new Vuex.Store(Store)

const router = new VueRouter({
    routes: Router
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
