<template lang="html">
    <div class="is-rounded-bottom">
        <div class="sounds">
            <table class="table rm-mrgb">
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
    import fs from 'fs'
    import path from 'path'
    import Particle from 'particle-api-js'
    import { getAudioContext } from '../../../vuex/getters'
    export default {
        data () {
            return {
                sounds: [],
                particle: new Particle({ baseUrl: 'http://localhost:8080', clientId: 'particle', clientSecret: 'particle' })
            }
        },
        vuex: {
            getters: { AudioContext: getAudioContext }
        },
        methods: {
            playSound (sound) {
                sound.audioElement.currentTime = 0
                sound.audioElement.play()
            },
            loadSoundBuffer (folderName, name) {
                let self = this
                return new window.Promise(function (resolve, reject) {
                    let audio = self.AudioContext
                    let request = new window.XMLHttpRequest()
                    request.open('GET', 'file:///' + folderName + name, true)
                    request.responseType = 'arraybuffer'
                    request.onload = () => {
                        if (request.status >= 200 && request.status < 300) {
                            audio.decodeAudioData(request.response, (buffer) => {
                                resolve(buffer)
                            }, (e) => {
                                console.log(e)
                            })
                        } else {
                            reject({
                                status: request.status,
                                statusText: request.statusText
                            })
                        }
                    }
                    request.onerror = () => {
                        reject({
                            status: this.status,
                            statusText: request.statusText
                        })
                    }
                    request.send()
                })
            },
            _loadSoundsFromFolder (folderName) {
                let sounds = []
                let self = this
                fs.readdir(folderName, function (err, files) {
                    if (err) {
                        throw err
                    }
                    for (let file of files) {
                        fs.stat(folderName + file, function (err, stats) {
                            if (err) {
                                console.log(err)
                                return // exit here since stats will be undefined
                            }

                            if (stats.isFile() && !file.startsWith('.')) {
                                self.loadSoundBuffer(folderName, file).then(
                                    (success) => {
                                        let audioElement = new Audio()
                                        let path = 'file:///' + folderName + file
                                        audioElement.src = path
                                        let soundDuration = success.duration
                                        let buffer = success
                                        let audio = { name: file, audioElement, soundDuration, path, buffer }

                                        sounds.push(audio)
                                    }
                                ).catch(
                                    (error) => {
                                        console.log(error)
                                    }
                                )
                            }
                            if (stats.isDirectory()) {
                                // console.error(file)
                            }
                        })
                    }
                })
                return sounds
            },
            getPath () {
                return this.$electron.remote.app.getAppPath()
            }
        },
        ready () {
            this.sounds = this._loadSoundsFromFolder(path.join(this.getPath(), '../../../../../app/dist/sounds/'))
        }
    }
</script>
