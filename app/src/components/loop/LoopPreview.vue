<template lang="html">
  <div class="column is-6">
    <div class="message is-primary">
      <div class="message-header">
        <div class="columns is-mobile">
          <div class="column is-6">
            <div class="is-pulled-left">
              Drums
            </div>
          </div>
          <div class="column is-6">
            <div class="is-pulled-right">
              <span class="icon"style="color: #cb6b22">
                <i class="fa fa-circle"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="message-body">
        4 modules
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              8[s]  125[ms]
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <span class="icon">
                <i class="fa fa-lightbulb-o"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="sass" scoped>
.message .level-item .icon
  background: #f9e2ce
  border-radius: 2px
  border: 1px solid #ffcea3
  color: #e6a267

.message .level-item .icon .is-active
  color: #f68b39
  background: #f8caa3
</style>
