import Vue from 'vue'
import mmwfHeader from './components/mmwf_header.vue'
import mmwfMenu from './components/mmwf_menu.vue'
import mmwfMain from './components/mmwf_main.vue'
import mmwfFooter from './components/mmwf_footer.vue'


/* eslint-disable no-new */
var App = new Vue({
  el: 'body',
  data: {
    tokens: []
  },
  components: {
    mmwfHeader,
    mmwfMenu,
    mmwfMain,
    mmwfFooter
  },
  events: {
    'token-generated': function (token) {
      this.tokens.push(token)
    }
  }
})
