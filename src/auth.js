import auth0 from 'auth0-js'
import Vue from 'vue'
import axios from "axios";
// exchange the object with your own from the setup step above.
let webAuth = new auth0.WebAuth({
    domain: 'https://oauth.vk.com/',
    clientID: '7735916',
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token',
   // scope: 'openid profile' // define the scopes you want to use
})

let auth = new Vue({
    computed: {
        token: {
            get: function() {
                return localStorage.getItem('id_token')
            },
            set: function(id_token) {
                localStorage.setItem('id_token', id_token)
            }
        },
        accessToken: {
            get: function() {
                return localStorage.getItem('access_token')
            },
            set: function(accessToken) {
                localStorage.setItem('access_token', accessToken)
            }
        },
        expiresAt: {
            get: function() {
                return localStorage.getItem('expires_at')
            },
            set: function(expiresIn) {
                let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
                localStorage.setItem('expires_at', expiresAt)
            }
        },
        user: {
            get: function() {
                return JSON.parse(localStorage.getItem('user'))
            },
            set: function(user) {
                localStorage.setItem('user', JSON.stringify(user))
            }
        }
    },
    methods: {
        login() {
            webAuth.authorize()

        },
        test() {
            webAuth.authorize();
        },
        logout() {

            return new Promise((resolve) => {



                localStorage.removeItem('access_token')
                localStorage.removeItem('id_token')
                localStorage.removeItem('expires_at')
                localStorage.removeItem('user')

                resolve()
            })
        },
        getU() {

             console.log(localStorage.accessToken)
        },
        isSet(){
            setTimeout(this.getU,3000)
        },
        isAuthenticated() {
            if(localStorage.accessToken === undefined){
                return false
            }
            else {
                return true
            }
        },
        handleAuthentication() {
            return new Promise((resolve, reject) => {
                webAuth.parseHash((err, authResult) => {
                    if (authResult && authResult.accessToken) {
                        this.expiresAt = authResult.expiresIn
                        this.accessToken = authResult.accessToken
                        this.token = authResult.idToken
                        this.user = authResult.idTokenPayload
                        resolve()

                    } else if (err) {
                        this.logout()
                        reject(err)
                    }

                })
            })
        }
    }
})

export default {
    install: function(Vue) {
        Vue.prototype.$auth = auth
    },

    out: function (){
        axios
            .get('http://api.vk.com/oauth/logout')
            .then(() => this.$router.push({ name: 'Home' }))

    },
    isAuthenticated() {
        return localStorage.getItem('access_token') !== null ;
    },
}

