<template>
  <div id="app">
    <mmwf-header></mmwf-header>
    <mmwf-main></mmwf-main>
    <mmwf-footer></mmwf-footer>
  </div>
</template>

<script>
  import mmwfHeader from './components/mmwf_header.vue'
  import mmwfMain from './components/mmwf_main.vue'
  import mmwfFooter from './components/mmwf_footer.vue'

  export default {
    components: {
      mmwfHeader,
      mmwfMain,
      mmwfFooter
    }
  }
</script>
