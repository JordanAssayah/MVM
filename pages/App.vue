<template>
  <div style="padding-top:60px">
    <div class="container is-fluid">
      <div class="row">
        <div class="col-sm-2 hidden-sm hidden-xs">
          <ul class="nav nav-pills nav-stacked" style="position: fixed">
            <li><a v-link="{ path: '/dashboard' }"><i class="fa fa-tachometer fa-fw"></i> Dashboard</a></li>
            <li><a v-link="{ path: '/account' }"><i class="fa fa-user fa-fw"></i> Account</a></li>
            <li><a v-link="{ path: '/project-manager' }"><i class="fa fa-archive fa-fw"></i> Project manager</a></li>
            <li><a v-link="{ path: '/particle-interface' }"><i class="fa fa-cube fa-fw"></i> Particle Interface</a></li>
            <li><a v-link="{ path: '/sounds' }"><i class="fa fa-download fa-fw"></i> Download sounds</a></li>
            <li><a v-link="{ path: '/settings' }"><i class="fa fa-cog fa-fw"></i> Settings</a></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-10">
          <!--<hr style="border-top: 1px solid #434857">-->
          <div class="page-header mrgt--">
            <h2 >{{ title }}</h2>
          </div>
          <div class="row">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'
  export default {
    store,
    data () {
      return {
        title: 'Particle Inerface'
      }
    },
    watch: {
      '$route' () {
        let url = this.$route.path
        if(url == '/'){
          this.title = 'Particle Inerface'
        }
        if (url == '/project-manager'){
          this.title = 'Project manager'
        }
      }
    }
  }
</script>
