// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
require(`./themes/app.${__THEME}.styl`)
// ==============================

import Vue from 'vue'
import VueResource from 'vue-resource'
import Quasar from 'quasar'
import router from './router'
import map from './map' // eslint-disable-line
import common from './common' // eslint-disable-line
import 'animate.css/animate.min.css'

Vue.use(VueResource)
Vue.use(Quasar) // Install Quasar Framework

// json filter is now not bundled with vue
Vue.filter('json', x => JSON.stringify(x))

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App'))
  })
})
