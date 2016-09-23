import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Electron from 'vue-electron'
import App from './App'

// Views
import MyAccount from './views/MyAccount'
import ProjectManager from './views/ProjectManager'
import ParticleInterface from './views/ParticleInterface'
import LoopRecorder from './views/LoopRecorder'

// Components
import Device from './components/device/Device'
import DeviceList from './components/device/DeviceList'
import DeviceSettings from './components/device/DeviceSettings'
import DeviceSounds from './components/device/DeviceSounds'
import DeviceMetrics from './components/device/DeviceMetrics'
import LoopPreview from './components/loop/LoopPreview'

// Register views
Vue.component('App', App)
Vue.component('MyAccount', MyAccount)
Vue.component('ProjectManager', ProjectManager)
Vue.component('ParticleInterface', ParticleInterface)
Vue.component('LoopRecorder', LoopRecorder)

// Register components
Vue.component('Device', Device)
Vue.component('DeviceList', DeviceList)
Vue.component('DeviceSettings', DeviceSettings)
Vue.component('DeviceSounds', DeviceSounds)
Vue.component('DeviceMetrics', DeviceMetrics)
Vue.component('LoopPreview', LoopPreview)

// Plugin to use
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Electron)

var router = new VueRouter({
  history: true,
  saveScrollPostion: true,
  linkActiveClass: 'is-active',
  root: '/my-account'
})

router.map({
  '/my-account': {
    component: MyAccount
  },
  '/project-manager': {
    component: ProjectManager
  },
  '/particle-interface': {
    component: ParticleInterface,
    subRoutes: {
      '/list-device': {
        component: DeviceList
      },
      '/device/:deviceId': {
        component: Device,
        subRoutes: {
          '/settings': { component: DeviceSettings },
          '/sounds': { component: DeviceSounds },
          '/metrics': { component: DeviceMetrics }
        }
      }
    }
  },
  '/loop-recorder': {
    component: LoopRecorder
  }
})

router.redirect({
  '/': '/my-account',
  '/particle-interface': '/particle-interface/list-device'
})

router.start(App, 'app')
