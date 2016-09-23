<template lang="html">
  <div class="is-rounded-bottom">
    <div class="sounds">
      <table class="table add-pdg rm-mrgb">
        <thead>
          <th>Actions</th>
          <th>Name</th>
          <th>Duration <small>[min:sec:ms]</small></th>
        </thead>
        <tbody>
          <template v-for="sound of sounds">
            <tr>
              <td>
                <a class="button is-small is-link">
                  <span class="icon is-small">
                    <i class="fa fa-crosshairs"></i>
                  </span>
                  <span>Pick this sound</span>
                </a>
                <a class="button is-small is-link" @click="playSound(sound)">
                  <span class="icon is-small">
                    <i class="fa fa-play"></i>
                  </span>
                  <span>Play</span>
                </a>
              </td>
              <td>{{ sound.name }}</td>
              <td>{{ sound.soundDuration }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Particle from 'particle-api-js'
import { getAudioContext, getSounds } from '../../../vuex/getters'
export default {
  data () {
    return {
      particle: new Particle({ baseUrl: 'http://localhost:8080', clientId: 'particle', clientSecret: 'particle' })
    }
  },
  vuex: {
    getters: { AudioContext: getAudioContext, sounds: getSounds }
  },
  methods: {
    playSound (sound) {
      sound.audioElement.currentTime = 0
      sound.audioElement.play()
    }
  }
}
</script>
