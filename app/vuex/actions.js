/**
 * Importing libraries
 */
import Particle from 'particle-api-js'

/**
 * Dispatch function
 */

// MyAccount
const loginToParticle = ({ dispatch, state }, email, password) => {
  let particle = new Particle()
  if (email && password) {
    particle.login({ username: email, password: password }, dispatch('LOADING', true)).then(
      success => {
        dispatch('UPDATE_PARTICLE_TOKEN', success.body.access_token)
        dispatch('LOADING', false)
        listDevices({ dispatch, state })
      },
      error => {
        dispatch('SET_ERROR', error)
        dispatch('SHOW_ERROR', true)
      }
    )
  }
}

const listDevices = ({ dispatch, state }) => {
  let particle = new Particle()
  if (state.particleToken) {
    particle.listDevices({ auth: state.particleToken }).then(
      success => {
        let listDevices = success
        for (let i = 0; i < listDevices.body.length; i++) {
          particle.getDevice({ deviceId: listDevices.body[i].id, auth: state.particleToken }).then(
            success => {
              let particleDevices = [...state.particleDevices]
              if (particleDevices.length < 1) {
                success.body.sensors = loadSensorsConfig()
                dispatch('PUSH_PARTICLE_DEVICE', success.body)
              } else {
                for (let j = 0; j < particleDevices.length; j++) {
                  if (listDevices.body[i].id === particleDevices[j].id) {
                    dispatch('UPDATE_PARTICLE_DEVICE', j, success.body)
                  } else if (listDevices.body.length !== particleDevices.length) {
                    success.body.sensors = loadSensorsConfig()
                    dispatch('PUSH_PARTICLE_DEVICE', success.body)
                  }
                }
              }
            },
            error => {
              dispatch('SET_ERROR', error)
              dispatch('SHOW_ERROR', true)
            }
          )
        }
      },
      error => {
        dispatch('SET_ERROR', error)
        dispatch('SHOW_ERROR', true)
      }
    )
  }
}

const updateParticleDevices = ({ dispatch, state }) => {
  if (state.particleToken) {
    let timerId = setInterval(() => {
      listDevices({ dispatch, state })
    }, 7000)
    dispatch('TIMER_ID_OF_UPDATE_LIST_DEVICES', timerId)
  }
}

const clearIntervalForTimer = ({ dispatch, state }) => {
  dispatch('CLEAR_INTERVAL', state.updateTimerIdForListDevices)
}

const saveDeviceConfig = function ({ dispatch, state }, config) {
  // console.log(config)
}

const saveSensorOfDeviceConfig = ({ dispatch, state }, deviceIndex, sensor, type, value) => {
  dispatch('UPDATE_DEVICE_CONFIG', deviceIndex, sensor, type, value)
}

const analogRead = ({ dispatch, state }, token, deviceId, analogPin) => {
  let particle = new Particle()
  if (token) {
    setInterval(() => {
      particle.callFunction({ deviceId: deviceId, name: 'analogRead', argument: analogPin, auth: token }).then(
        success => {
          console.log(success)
        },
        error => {
          dispatch('SET_ERROR', error)
          dispatch('SHOW_ERROR', true)
        }
      )
    }, 30)
  }
}

const digitalRead = ({ dispatch, state }, token, deviceId, digitalPin) => {
  let particle = new Particle()
  if (token) {
    setInterval(() => {
      particle.callFunction({ deviceId: deviceId, name: 'digitalRead', argument: digitalPin, auth: token }).then(
        success => {
          console.log(success)
        },
        error => {
          dispatch('SET_ERROR', error)
          dispatch('SHOW_ERROR', true)
        }
      )
    }, 30)
  }
}

const sendSignalUp = ({ dispatch, state }, token, deviceId, isConnected) => {
  let particle = new Particle()
  if (token && isConnected) {
    particle.signalDevice({ deviceId: deviceId, signal: true, auth: token }).then(
      success => {
        console.log(success)
      },
      error => {
        dispatch('SET_ERROR', error)
        dispatch('SHOW_ERROR', true)
      }
    )
  }
}

const sendSignalDown = ({ dispatch, state }, token, deviceId, isConnected) => {
  let particle = new Particle()
  if (token && isConnected) {
    particle.signalDevice({ deviceId: deviceId, signal: false, auth: token }).then(
      success => {
        console.log(success)
      },
      error => {
        dispatch('SET_ERROR', error)
        dispatch('SHOW_ERROR', true)
      }
    )
  }
}

const addLoop = ({ dispatch, state }, loopName, loopDevicesIdToListenTo) => {
  let loopId = state.numberOfLoops + 1
  const AudioContext = state.audioContext
  let loop = setDefaultLoopConfig(AudioContext, loopId, loopName, loopDevicesIdToListenTo)
  dispatch('PUSH_NEW_LOOP', loop)
}

const createAndConnectOscillator = (audio) => {
  let oscillator = audio.createOscillator()
  oscillator.type = 'square'
  oscillator.frequency.value = 0
  oscillator.connect(audio.destination)

  return oscillator
}

const createAndConnectSound = (audio, soundBuffer) => {
  let soundNode = audio.createBufferSource()
  soundNode.connect(audio.destination)
  soundNode.buffer = soundBuffer

  return soundNode
}

const recordLoop = (mediaRecorder, oscillator, soundNode, running) => {
  if (!running) {
    running = true
    createAndConnectOscillator()
    createAndConnectSound()
    oscillator.start()
    setTimeout(() => { soundNode.start() }, 2000)
    mediaRecorder.start()
  } else {
    running = false
    mediaRecorder.stop()
    oscillator.stop()
    soundNode.stop()
  }
}

// See http://stackoverflow.com/questions/23986953/blob-saved-as-object-object-nodejs
const blobToBase64 = (blob, cb) => {
  let reader = new window.FileReader()
  reader.onload = () => {
    var dataUrl = reader.result
    var base64 = dataUrl.split(',')[1]
    cb(base64)
  }
  reader.readAsDataURL(blob)
}

const loadSensorsConfig = () => {
  return [
    { IO: 'A0', activeFrom: 0, volume: 0, useVelocitySensor: false, toggleSensor: false, soundPath: '' },
    { IO: 'A1', activeFrom: 0, volume: 0, useVelocitySensor: false, toggleSensor: false, soundPath: '' },
    { IO: 'A2', activeFrom: 0, volume: 0, useVelocitySensor: false, toggleSensor: false, soundPath: '' },
    { IO: 'A3', activeFrom: 0, volume: 0, useVelocitySensor: false, toggleSensor: false, soundPath: '' },
    { IO: 'A4', activeFrom: 0, volume: 0, useVelocitySensor: false, toggleSensor: false, soundPath: '' },
    { IO: 'A5', activeFrom: 0, volume: 0, useVelocitySensor: false, toggleSensor: false, soundPath: '' }
  ]
}

const loadSoundConfig = () => {}

const setDefaultLoopConfig = (AudioContext, loopId, loopName, loopDevicesIdToListenTo) => {
  let audio = AudioContext
  let dest = audio.createMediaStreamDestination()
  let mediaRecorder = new window.MediaRecorder(dest.stream)
  let chunks = []
  let running = false
  let oscillator = null

  return { id: loopId, loopName, loopDevicesIdToListenTo, audio, chunks, mediaRecorder, running, oscillator }
}

const setMediaRecorderEventsForLoop = ({ dispatch, state }, loopId) => {
  let mediaRecorder, chunks
  const loops = state.loops
  for (let loop of loops) {
    if (loop.id === loopId) {
      mediaRecorder = loop.mediaRecorder
      chunks = loop.chunks
    }
  }
  mediaRecorder.ondataavailable = (event) => {
    chunks.push(event.data)
  }
  mediaRecorder.onstop = (eve) => {
    // Make blob out of our blobs, and open it.
    let blob = new window.Blob(this.chunks, { 'type': 'audio/wav; codecs=1' })
    blobToBase64(blob, (base64) => { // encod
      let buf = new window.Buffer(base64, 'base64') // decod
      console.log(buf)
        /* fs.writeFile('./static/test.wav', buf, function (error) {
            if (error) {
                console.log(error)
            } else {
                return 'ok'
            }
        }) */
    })
  }
}

/**
 * JavaScript cast functions
 */
const toMMSSMS = () => {
  var secnum = parseInt(this, 10) // don't forget the second param
  var hours = Math.floor(secnum / 3600)
  var minutes = Math.floor((secnum - (hours * 3600)) / 60)
  var seconds = secnum - (hours * 3600) - (minutes * 60)

  // if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
  var time = /* hours+':'+ */ minutes + ':' + seconds
  return time
}

export {
  loginToParticle,
  listDevices,
  updateParticleDevices,
  clearIntervalForTimer,
  saveDeviceConfig,
  saveSensorOfDeviceConfig,
  analogRead,
  digitalRead,
  sendSignalUp,
  sendSignalDown,
  setDefaultLoopConfig,
  createAndConnectOscillator,
  createAndConnectSound,
  blobToBase64,
  recordLoop,
  addLoop,
  setMediaRecorderEventsForLoop,
  loadSoundConfig,
  toMMSSMS
}
