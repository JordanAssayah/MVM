<template>
  <div id="app">
    <mvm-header></mvm-header>
    <mvm-main></mvm-main>
    <mvm-footer></mvm-footer>
  </div>
</template>

<script>
  import mvmHeader from './components/mvm_header.vue'
  import mvmMain from './components/mvm_main.vue'
  import mvmFooter from './components/mvm_footer.vue'

  export default {
    components: {
      mvmHeader,
      mvmMain,
      mvmFooter
    }
  }
</script>
