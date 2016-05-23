<template id="menu">
  <main class="main-page">
      <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            <router-view></router-view>
          </div>
        </div>
      </section>
  </main>
  <aside class="menu side-menu-mvm">
    <ul class="menu-list">
      <li @click="closeMenu">
        <a v-link="{ path: '/project-manager' }">
          <span class="icon">
            <i class="fa fa-plus"></i>
          </span>
          Project manager
        </a>
      </li>
      <li @click="closeMenu">
        <a v-link="{ path: '/wifi-terface' }">
          <span class="icon">
            <i class="fa fa-cubes"></i>
          </span>
          Use the wifiterface
        </a>
      </li>
      <li @click="closeMenu">
        <a v-link="{ path: '/sounds' }">
          <span class="icon">
            <i class="fa fa-music"></i>
          </span>
          Download sounds
        </a>
      </li>
    </ul>
    <ul class="menu-list pull-down">
      <li @click="closeMenu">
        <a v-link="{ path: '/settings' }">
          <span class="icon">
            <i class="fa fa-sliders"></i>
          </span>
          Settings
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
  import mvmParticleLogin from './forms/mvm_particle_login.vue'

  export default {
    components: {
      mvmParticleLogin
    },
    methods: {
      closeMenu: function () {
        toggleSideMenu()
      }
    }
  }
</script>
