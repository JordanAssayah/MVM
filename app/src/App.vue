<template>
  <div>
    <header>
      <div class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item" href="https://github.com/JordanAssayah/VOB" target="_blank">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
            </a>
          </div>
          <div class="nav-center">
            <a class="nav-item" v-link="{ path: '/my-account' }">My Account</a>
            <a class="nav-item" v-link="{ path: '/project-manager' }">Project Manager</a>
            <a class="nav-item" v-link="{ path: '/particle-interface' }">Particle Interface</a></li>
            <a class="nav-item" v-link="{ path: '/loop-recorder' }">Loop Recorder</a></li>
          </div>
          <div class="nav-right">
            <span class="nav-toggle" onclick="toggleSideMenu()">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section">
        <div class="container">
          <router-view></router-view>
        </div>
      </section>
    </main>

    <footer>
      <div class="add-mrg" align="center">
        <img src="http://forthebadge.com/images/badges/built-with-swag.svg" alt="" />
        <img src="http://forthebadge.com/images/badges/uses-git.svg" alt="" />
      </div>
    </footer>
  </div>
</template>

<script>
import store from '../vuex/store'
export default { store }
</script>

<style src="./assets/bulma/bulma.sass" lang="sass"></style>
