import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let audio = new window.AudioContext()

const state = {
  particleToken: '',
  particleDevices: [],
  updateTimerIdForListDevices: null,
  loops: [],
  numberOfLoops: 0,
  audioContext: audio,
  loading: false,
  error: '',
  showError: false
}

const mutations = {
  UPDATE_PARTICLE_TOKEN(state, token) {
    state.particleToken = token
  },
  UPDATE_PARTICLE_DEVICE(state, deviceIndex, deviceInfo) {
    Object.assign(state.particleDevices[deviceIndex], state.particleDevices[deviceIndex], deviceInfo)
  },
  PUSH_PARTICLE_DEVICE(state, deviceAttributes) {
    state.particleDevices.push(deviceAttributes)
  },
  UPDATE_DEVICE_CONFIG(state, deviceIndex, sensorIndex, type, sensorValue) {
    state.particleDevices[deviceIndex].sensors[sensorIndex][type] = sensorValue
  },
  TIMER_ID_OF_UPDATE_LIST_DEVICES(state, timerId) {
    state.updateTimerIdForListDevices = timerId
  },
  CLEAR_INTERVAL(state, timerId) {
    clearInterval(state.updateTimerIdForListDevices)
  },
  PUSH_NEW_LOOP(state, newLoop) {
    state.numberOfLoops++
      state.loops.push(newLoop)
  },
  UPDATE_BUFFER(state, buffer) {
    state.buffer = buffer
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  SHOW_ERROR(state, boolean) {
    state.showError = boolean
  },
  LOADING(state, boolean) {
    state.loading = boolean
  }
}

export default new Vuex.Store({
  state,
  mutations
})
