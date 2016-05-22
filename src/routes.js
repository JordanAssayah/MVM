import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import notFound from './pages/NotFound.vue'
import mmwfHomePage from './pages/Home.vue'
import mmwfSettingsPage from './pages/Settings.vue'

Vue.component('app', App)
Vue.component('mmwf-home-page', mmwfHomePage)
Vue.component('mmwf-settings-page', mmwfSettingsPage)
Vue.component('not-found', notFound)

Vue.use(VueRouter)

var router = new VueRouter({
  history: true,
  root: '/'
})

router.map({
  '*': {
    component: notFound
  },
  '/': {
    component: mmwfHomePage
  },
  '/settings': {
    component: mmwfSettingsPage
  }
})

router.start(App, '#app')
