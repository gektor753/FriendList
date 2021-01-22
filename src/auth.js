import auth0 from 'auth0-js'
import axios from "axios";
import localStorageServices from "@/localStorageServices";

let webAuth = new auth0.WebAuth({
        domain: 'https://oauth.vk.com/',
        clientID: '7736982',
        // make sure this line is contains the port: 8080
        redirectUri: 'http://localhost:8080/callback',
        responseType: 'token',
         scope: 'friends' // define the scopes you want to use
})

export default {
    webAuth,
    out: function () {
        axios
            .get('http://api.vk.com/oauth/logout')
            .then(() => this.$router.push({name: 'Home'}))

    },
    isAuthenticated() {
        return localStorageServices.getAccessToken();
    },
    login() {
        webAuth.authorize()
    },
    logout() {

        return new Promise((resolve) => {
            localStorageServices.removeAccessToken()
            localStorageServices.removeExpiresAt()
            localStorageServices.removeUser()
            resolve()
        })
    },
    getU() {
        console.log(localStorage.accessToken)
    },
    isSet() {
        setTimeout(this.getU, 3000)
    },
    handleAuthentication() {
        return new Promise((resolve, reject) => {
            webAuth.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken) {
                    localStorageServices.setExpiresAt(authResult.expiresIn)
                    //this.accessToken = authResult.accessToken
                    localStorageServices.setUser(authResult.idTokenPayload)
                    localStorageServices.setAccessToken(authResult.accessToken)

                    resolve()

                } else if (err) {
                    this.logout()
                    reject(err)
                }

            })
        })
    }
}

