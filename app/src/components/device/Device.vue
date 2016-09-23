<template lang="html">
  <div class="column is-8 is-offset-2">
    <div class="big-box-shadow is-rounded border-light">
      <div class="tabs rm-mrgb is-grey is-rounded-top">
        <ul>
          <li v-link-active>
            <a v-link="{ path: '/particle-interface/device/' + $route.params.deviceId + '/settings' }">
              <span class="icon is-small"><i class="fa fa-cog"></i></span>
              <span>Settings</span>
            </a>
          </li>
          <li v-link-active>
            <a v-link="{ path: '/particle-interface/device/' + $route.params.deviceId + '/sounds' }">
              <span class="icon is-small"><i class="fa fa-music"></i></span>
              <span>Chose a sound</span>
            </a>
          </li>
          <li v-link-active>
            <a v-link="{ path: '/particle-interface/device/' + $route.params.deviceId + '/metrics' }">
              <span class="icon is-small"><i class="fa fa-area-chart"></i></span>
              <span>Metrics</span>
            </a>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
