<template>
  <p>Counter is {{ counterValue }}</p>
</template>

<script>
import { getCount } from '../vuex/getters'
export default {
  vuex: {
    getters: {
      counterValue: getCount
    }
  }
}
</script>
