<template>
  <div class="{{mobile}} {{tablet}} {{laptop}} {{desktop}}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      xs: { type: String, default: '' },
      sm: { type: String, default: '' },
      md: { type: String, default: '' },
      lg: { type: String, default: '' },
    },
    computed: {
      mobile () { return (this.xs != '') ? 'col-xs-' + this.xs : this.xs },
      tablet () { return (this.sm != '') ? 'col-sm-' + this.sm : this.sm },
      laptop () { return (this.md != '') ? 'col-md-' + this.md : this.md },
      desktop () { return (this.lg != '') ? 'col-lg-' + this.lg : this.lg }
    }
  }
</script>
