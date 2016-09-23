<template lang="html">
  <div class="columns is-multiline">
    <div class="column is-2">
      <a class="button is-primary is-outlined is-fullwidth add-mrgb-l2" @click="toggleModal(false)">
        Add loop
      </a>
      <template v-for="loop of loops">
        <a class="button is-primary is-fullwidth add-mrgb-l2">
          Loop {{ loop.id }} | {{ loop.loopName }}
        </a>
      </template>
    </div>

    <div class="column is-6">
      <div style="color: #92959d" class="border-light is-rounded add-pdg-l2">
        <template v-for="i in 0">
          <div class="box add-mrg">

          </div>
        </template>
        <p class="has-text-centered">
          <a class="button is-info is-outlined is-medium" @click="playKick">
            play kick
          </a>
          <a class="button is-info is-outlined is-medium" @click="playSnare">
            play snare
          </a>
          <a class="button is-info is-outlined is-medium">
            <span class="add-mrgr-l1">Start Recording</span>
            <span class="icon">
              <i class="fa fa-circle"></i>
            </span>
            <span class="add-mrgl-l1 subtitle is-6">Or press your space bar ;)</span>
          </a>
        </p>
      </div>
    </div>

    <div class="column is-4">
      <div class="columns is-multiline is-mobile">
        <template v-for="loop of loops">
          <loop-preview></loop-preview>
        </template>
      </div>
    </div>


    <div class="modal" id="add-loop">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Loop Config</p>
          <button class="delete" @click="toggleModal"></button>
        </header>
        <section class="modal-card-body">
          <label class="label">Name of the loop</label>
          <p class="control">
            <input class="input add-mrgb-l2" type="text" v-model="loopName">
          </p>
          <label class="label">Add devices</label>
          <div class="is-rounded-bottom">
            <div class="particle-table">
              <table class="table">
                <thead>
                  <th>Device ID</th>
                  <th>Device name</th>
                  <th>Actions</th>
                </thead>
                <tbody>
                  <template v-for="device of devices" :key="device.id">
                    <tr>
                      <td><code>{{ device.id }}</code></td>
                      <td><code>{{ device.name }}</code></td>
                      <td>
                        <a class="button is-info is-small is-outlined" @click="addToDeviceList(device.id)">
                          <span class="icon is-small">
                            <i class="fa fa-crosshairs"></i>
                          </span>
                          <span>Pick this one</span>
                        </a>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-primary" @click="toggleModal(true)">Save changes</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setDefaultLoopConfig,
  createAndConnectOscillator,
  createAndConnectSound,
  addLoop,
  recordLoop
} from '../../vuex/actions'
import { getParticleDevices, getLoops } from '../../vuex/getters'
import LoopPreview from '../components/loop/LoopPreview'

export default {
  data () {
    return {
      loopName: '',
      devicesIdToListenTo: [],
      selectedLoop: null,
      kickBuffer: '',
      snareBuffer: ''
    }
  },
  vuex: {
    actions: {
      setDefaultLoopConfig,
      createAndConnectOscillator,
      createAndConnectSound,
      addLoop,
      recordLoop
    },
    getters: {
      devices: getParticleDevices,
      loops: getLoops
    }
  },
  methods: {
    toggleModal (addingLoop) {
      if (addingLoop === false) {
        document.getElementById('add-loop').classList.toggle('is-active')
      } else {
        document.getElementById('add-loop').classList.toggle('is-active')
        this.addLoop(this.loopName, this.devicesIdToListenTo)
        this.loopName = ''
        this.devicesIdToListenTo = []
      }
    },
    addToDeviceList (newDeviceId) {
      if (this.devicesIdToListenTo.length === 0) {
        this.devicesIdToListenTo.push(newDeviceId)
      } else {
        for (let deviceId of this.devicesIdToListenTo) {
          if (deviceId !== newDeviceId) {
            this.devicesIdToListenTo.push(newDeviceId)
          }
        }
      }
    },
    playKick () {
      //
    },
    playSnare () {
      // df
    }
  },
  components: { LoopPreview },
  ready () {
  }
}
</script>
