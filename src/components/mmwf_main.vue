<template>
  <main class="main-page">
      <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            <mmwf-particle-login></mmwf-particle-login>
          </div>
        </div>
      </section>
  </main>
</template>

<script>
  import mmwfParticleLogin from './forms/mmwf_particle_login.vue'
  
  export default{
    components: {
      mmwfParticleLogin
    }
  }
</script>
