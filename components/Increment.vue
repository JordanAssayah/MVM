<template>
  <div>
    <button class="btn btn-primary" @click='increment' type="button">Incrément + 1</button>
  </div>
</template>


<script>
  import { incrementCounter } from '../vuex/actions'
  export default {
    vuex: {
      actions: {
        increment: incrementCounter
      }
    }
  }
</script>

<style>

</style>
