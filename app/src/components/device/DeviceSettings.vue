<template lang="html">
    <div class="is-rounded-bottom add-pdg-l2 border-light">
        <div class="columns">
            <div class="column is-3">
                <div class="rm-mrgr is-content-centered">
                    <img v-bind:src="photonImg" class="img-responsive" alt="photon device" width="128" />
                </div>
            </div>
            <div class="column is-8 v-align-center">
                <table>
                    <tbody>
                        <tr>
                            <div class="columns">
                                <div class="column is-3">
                                    <label class="label">Sensor</label>
                                </div>
                                <div class="column is-6">
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
                        </tr>
                        <tr>
                            <div class="columns" v-if="isSensorSelected">
                                <div class="column is-3">
                                    <label class="label">Sensor Value</label>
                                </div>
                                <div class="column is-6  v-align-center">
                                    <progress class="progress is-info is-small" value="45" max="100">45%</progress>
                                </div>
                                <div class="column is-2">
                                    {{ sensorValue }}
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div class="columns" v-if="isSensorSelected">
                                <div class="column is-3">
                                    <label class="label">Active from</label>
                                </div>
                                <div class="column is-6  v-align-center">
                                    <slider type="danger" :value.sync="devices[deviceIndex].sensors[sensorSelected].activeFrom" v-on:change="updateSensorValue(sensorSelected, 'activeFrom')" :min="0" :step="1" :max="100" is-fullwidth></slider>
                                </div>
                                <div class="column is-2">
                                    {{ devices[deviceIndex].sensors[sensorSelected].activeFrom }} %
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div class="columns" v-if="isSensorSelected">
                                <div class="column is-3">
                                    <label class="label">Volume</label>
                                </div>
                                <div class="column is-6  v-align-center">
                                    <slider type="primary" :value.sync="devices[deviceIndex].sensors[sensorSelected].volume" v-on:change="updateSensorValue(sensorSelected, 'volume')" :min="0" :step="1" :max="100" is-fullwidth></slider>
                                </div>
                                <div class="column is-2">
                                {{ devices[deviceIndex].sensors[sensorSelected].volume }} %
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div class="columns" v-if="isSensorSelected">
                                <div class="column is-3">
                                    <label class="label">Use velocity of sensor</label>
                                </div>
                                <div class="column is-6  v-align-center">
                                    <switch :value.sync="devices[deviceIndex].sensors[sensorSelected].useVelocitySensor" v-on:change="updateSensorValue(sensorSelected, 'useVelocitySensor')"></switch>
                                    <tooltip label="This option disable the volume control and let you use the velocity of the force sensor as volume" size="medium" placement="right">
                                        <span class="icon is-small"><i class="fa fa-info-circle v-txt-align-middle add-pdgl-l1"></i></span>
                                    </tooltip>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <div class="columns" v-if="isSensorSelected">
                                <div class="column is-3">
                                    <label class="label">Toggle sensor</label>
                                </div>
                                <div class="column is-6  v-align-center">
                                    <switch :value.sync="devices[deviceIndex].sensors[sensorSelected].toggleSensor" v-on:change="updateSensorValue(sensorSelected, 'toggleSensor')"></switch>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
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
                return path.join(this.$electron.remote.app.getAppPath(), '../../../../../app/src/assets/photon.png')
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
