import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import notFound from './pages/NotFound.vue'
import mvmHomePage from './pages/Home.vue'
import mvmSettingsPage from './pages/Settings.vue'

Vue.component('app', App)
Vue.component('mvm-home-page', mvmHomePage)
Vue.component('mvm-settings-page', mvmSettingsPage)
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
    component: mvmHomePage
  },
  '/settings': {
    component: mvmSettingsPage
  }
})

router.start(App, '#app')
