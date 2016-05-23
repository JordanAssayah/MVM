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
      <li>
        <a v-link="{ path: '/create-project' }">
          <span class="icon">
            <i class="fa fa-plus"></i>
          </span>
          Create a new project
        </a>
      </li>
      <li>
        <a v-link="{ path: '/open-project' }">
          <span class="icon">
            <i class="fa fa-folder"></i>
          </span>
          Open a project
        </a>
      </li>
      <li>
        <a v-link="{ path: '/wifi-terface' }">
          <span class="icon">
            <i class="fa fa-cubes"></i>
          </span>
          Use the wifiterface
        </a>
      </li>
      <li>
        <a v-link="{ path: '/sounds' }">
          <span class="icon">
            <i class="fa fa-music"></i>
          </span>
          Download sounds
        </a>
      </li>
    </ul>
    <ul class="menu-list pull-down">
      <li>
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
    }
  }
</script>
