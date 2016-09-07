<template lang="html">
    <div class="column is-8 is-offset-2">
        <div class="panel is-rounded">
            <div class="panel-heading">
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p class="title">Particle Devices</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <p class="level-item">
                            <a class="button is-info is-outlined" @click="updateParticleDevices">
                                <span class="icon is-small">
                                        <i class="fa fa-refresh"></i>
                                    </span>
                                <span>Force refresh</span>
                            </a>
                        </p>
                    </div>
                </nav>
            </div>
            <div class="is-rounded-bottom">
                <div class="particle-table">
                    <table class="table">
                        <thead>
                            <th>Device ID</th>
                            <th>Device name</th>
                            <th>Device Firmware</th>
                            <th>Connected</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <template v-for="device of devices" :key="device.id">
                                <tr>
                                    <td><code>{{ device.id }}</code></td>
                                    <td><code>{{ device.name }}</code></td>
                                    <td><code>v0.5.2</code></td>
                                    <td><code>{{ device.connected }}</code></td>
                                    <td>
                                        <div class="control is-grouped">
                                            <p class="control">
                                                <a class="button is-warning is-small is-outlined">
                                                    Send signal
                                                </a>
                                            </p>
                                            <p class="control">
                                                <a v-link="{ path: '/particle-interface/device/' + device.id + '/settings' }" class="button is-danger is-small is-outlined">
                                                    <span class="icon is-small">
                                                            <i class="fa fa-sliders"></i>
                                                        </span>
                                                    <span>Settings</span>
                                                </a>
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { updateParticleDevices, clearIntervalForTimer } from '../../../vuex/actions'
    import { getParticleToken, getParticleDevices } from '../../../vuex/getters'

    export default {
        vuex: {
            actions: {
                updateParticleDevices,
                clearIntervalForTimer
            },
            getters: {
                token: getParticleToken,
                devices: getParticleDevices
            }
        },
        ready () {
            this.updateParticleDevices()
        },
        detached () {
            this.clearIntervalForTimer()
        }
    }
</script>
