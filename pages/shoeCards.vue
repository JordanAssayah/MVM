<template>
  <column v-for="n in 50" lg="4">
    <div class="panel panel-mvm">
      <div class="panel-body">
        <Display></Display>
      </div>
    </div>
  </column>
  <Increment></Increment>
</template>

<script>
  import Display from '../components/Display.vue'
  import Increment from '../components/Increment.vue'
  import column from '../components/column.vue'

  export default {
    components: {
      Display,
      Increment,
      column
    }
  }
</script>
