<template lang="html">
  <div class="is-rounded-bottom add-pdg">
    <div class="columns">
      <div class="column is-3">
        <div class="rm-mrgr is-content-centered">
          <img v-bind:src="photonImg" class="img-responsive" alt="photon device" width="128" />
        </div>
      </div>
      <div class="column is-8">

        <!-- Chose sensor -->
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Sensor</label>
          </div>
          <div class="control">
            <span class="select is-small">
              <select v-on:change="showInputs(sensorSelected)" v-model="sensorSelected">
                <option value="default">Select a I/0</option>
                <template v-for="i in 6">
                  <option value="{{ i }}">A{{ i }}</option>
                </template>
              </select>
            </span>
          </div>
        </div>

        <!-- Sensor Value -->
        <div class="control is-horizontal" v-if="isSensorSelected">
          <div class="control-label">
            <label class="label">Sensor Value</label>
          </div>
          <div class="control is-progress-bar">
            <tooltip :label="sensorValue" placement="right" type="info" :always="true">
              <progress class="progress is-info is-small" value="45" max="100"></progress>
            </tooltip>
          </div>
        </div>

        <!-- "Turn on" the sound from a specific sensor value -->
        <div class="control is-horizontal" v-if="isSensorSelected">
          <div class="control-label">
            <label class="label">Active from</label>
          </div>
          <div class="control is-slider">
            <tooltip :label="devices[deviceIndex].sensors[sensorSelected].activeFrom" placement="right" type="danger" :always="true">
              <slider type="danger" :value.sync="devices[deviceIndex].sensors[sensorSelected].activeFrom" v-on:change="updateSensorValue(sensorSelected, 'activeFrom')" :min="0" :step="1" :max="100" is-fullwidth></slider>
            </tooltip>
          </div>
        </div>

        <!-- Chose volume for the slected sensor -->
        <div class="control is-horizontal" v-if="isSensorSelected">
          <div class="control-label">
            <label class="label">Volume</label>
          </div>
          <div class="control is-slider">
            <tooltip :label="devices[deviceIndex].sensors[sensorSelected].volume" placement="right" type="primary" :always="true">
              <slider type="primary" :value.sync="devices[deviceIndex].sensors[sensorSelected].volume" v-on:change="updateSensorValue(sensorSelected, 'volume')" :min="0" :step="1" :max="100" is-fullwidth></slider>
            </tooltip>
          </div>
        </div>

        <!-- Feature -->
        <div class="control is-horizontal" v-if="isSensorSelected">
          <div class="control-label">
            <label class="label">Use velocity of sensor</label>
          </div>
          <div class="control is-switch">
            <switch :value.sync="devices[deviceIndex].sensors[sensorSelected].useVelocitySensor" v-on:change="updateSensorValue(sensorSelected, 'useVelocitySensor')"></switch>
            <tooltip label="This option disable the volume control and let you use the velocity of the force sensor as volume" size="medium" placement="right">
              <span class="icon is-small"><i class="fa fa-info-circle v-txt-align-middle add-pdgl-l1"></i></span>
            </tooltip>
          </div>
        </div>

        <!-- Feature -->
        <div class="control is-horizontal" v-if="isSensorSelected">
          <div class="control-label">
            <label class="label">Toggle sensor</label>
          </div>
          <div class="control is-switch">
            <switch :value.sync="devices[deviceIndex].sensors[sensorSelected].toggleSensor" v-on:change="updateSensorValue(sensorSelected, 'toggleSensor')"></switch>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveDeviceConfig, saveSensorOfDeviceConfig } from '../../../vuex/actions'
import { getParticleDevices } from '../../../vuex/getters'
import Slider from 'vue-bulma-slider'
import Switch from 'vue-bulma-switch'
import Tooltip from 'vue-bulma-tooltip'
import path from 'path'

export default {
  components: { Slider, Switch, Tooltip },
  data () {
    return {
      sensorSelected: null,
      sensorValue: 0,
      isSensorSelected: false,
      deviceIndex: null,
      deviceId: this.$route.params.deviceId,
      photonImg: ''
    }
  },
  vuex: {
    actions: { saveDeviceConfig, saveSensorOfDeviceConfig },
    getters: { devices: getParticleDevices }
  },
  methods: {
    showInputs (IO) {
      this.isSensorSelected = IO !== 'default'
    },
    updateSensorValue (sensorSelected, type) {
      this.saveSensorOfDeviceConfig(this.deviceIndex, sensorSelected, type, this.devices[this.deviceIndex].sensors[sensorSelected][type])
    },
    getPathImgPhoton () {
      return 'file://' + path.join(this.$electron.remote.app.getAppPath(), '../../../../../../../app/src/assets/photon.png')
    }
  },
  ready () {
    for (let i = 0; i < this.devices.length; i++) {
      if (this.devices[i].id === this.deviceId) {
        this.deviceIndex = i
      }
    }
    this.photonImg = this.getPathImgPhoton()
  }
}
</script>

<style scoped>
.columns {
  margin-bottom: 0;
}
</style>
