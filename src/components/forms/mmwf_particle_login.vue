<template>
  <div class="column is-4 is-offset-4">
    <div class="box" id="particle-form">
      <div align="center">
        <img src="img/particle.png" width="120" height="120">
      </div>
      <hr>
      </p>
      <p class="control has-icon">
        <input class="input" type="email" name="email" placeholder="Email" v-model="email">
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon">
        <input class="input" type="password" name="password" placeholder="Password" v-model="password">
        <i class="fa fa-lock"></i>
      </p>
      <div class="columns is-multiline">
        <div class="column is-12">
          <p class="control">
            <label class="checkbox is-unselectable">
              <input type="checkbox" name="remember-me">
              Remember me
            </label>
          </p>
        </div>
        <div class="column">
          <p class="control">
            <button class="button is-success" id="login" v-on:click="particleLogin">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Particle from 'particle-api-js'

  export default {
    data () {
      return {
        email: '',
        password: '',
        rememberMe: '',
        particle: new Particle(),
        token: ''
      }
    },
    methods: {
      particleLogin: function () {
        let self = this
        let btnLogin = document.querySelector('#login')
        btnLogin.classList.toggle('is-loading')
        this.particle.login({username: this.email, password: this.password}).then(
          function (data) {
            console.log('API call completed on promise resolve: ', data.body.access_token)
            btnLogin.classList.toggle('is-loading')
            self.$dispatch('token-generated',self.token = data.body.access_token)
            self.hideParticleForm()
          },
          function (err) {
            console.log('API call completed on promise fail: ', err)
            btnLogin.classList.toggle('is-loading')
          }
        )
      },
      hideParticleForm: function () {
        let self = this
        $('#particle-form').slideUp(1300, function () {
          $('#particle-form').remove()
        })
      }
    }
  }
</script>
