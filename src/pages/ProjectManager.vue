<template>
  <mvm-create-project></mvm-create-project>
</template>

<script>
  import mvmCreateProject from '../components/forms/mvm_create_project.vue'

  export default {
    components: {
      mvmCreateProject
    },
    methods: {
      toggleModal: function () {
        document.querySelector('#mdle').classList.toggle('is-active')
      }
    }
  }
</script>
