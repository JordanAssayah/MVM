import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../pages/App.vue'
import Home from '../pages/Home.vue'
import shoeCards from '../pages/shoeCards.vue'

Vue.component('App', App)
Vue.component('Home', Home)
Vue.component('ShoeCards', shoeCards)

Vue.use(VueRouter)

var router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  root: '/'
})

router.map({
  '/': {
    component: shoeCards
  },
  '/project-manager': {
    component: Home
  }
})

router.redirect({
  '/particle-interface': '/',
})

router.start(App, '.app')
