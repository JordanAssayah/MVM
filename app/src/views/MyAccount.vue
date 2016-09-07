<template lang="html">
    <div class="columns">
        <div class="column is-6 is-offset-3">
            <div class="box">
                <p class="title">
                    Particle account
                </p>
                <p class="control has-icon">
                    <input class="input" type="email" placeholder="Email" v-model="email">
                    <i class="fa fa-envelope"></i>
                </p>
                <p class="control has-icon">
                    <input class="input" type="password" placeholder="Password" v-model="password">
                    <i class="fa fa-lock"></i>
                </p>
                <button class="button is-success is-outlined" :class="{ 'is-loading': isLoading }" @click="loginToParticle(email, password)">
                    Sign in
                </button>
                <a href="https://build.particle.io/forgot-password" target="_blank" class="button is-link">
                    Forgot your password?
                </a>

                <div class="add-mrgt-l1 add-mrgb-l1">
                    <hr class="is-marginless">
                </div>

                <p class="control has-icon">
                    <input class="input" type="text" placeholder="Access Token">
                    <i class="fa fa-key"></i>
                </p>
                <p class="control">
                    <button class="button is-success is-outlined">
                        Use your token
                    </button>
                </p>

                <div class="add-mrgt-l1 add-mrgb-l1">
                    <hr class="is-marginless">
                </div>

                <p class="has-text-centered">
                    Holy guacamole ! You do not have a Particle account ? Sign up <a href="https://build.particle.io/signup" target="_blank">here</a> !
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { loginToParticle } from '../../vuex/actions'
    import { isLoading } from '../../vuex/getters'
    export default {
        data () { return { email: '', password: '' } },
        vuex: {
            actions: { loginToParticle },
            getters: { isLoading }
        }
    }
</script>
