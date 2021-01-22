let accessTokenKey = 'accessToken';
let expiresAt;
let user;
function  getAccessToken () {
    return localStorage.getItem(accessTokenKey)
}
function setAccessToken(accessToken) {
    localStorage.setItem(accessTokenKey, accessToken)
}
function removeAccessToken(){
    localStorage.removeItem(accessTokenKey)
}
function getExpiresAt() {
    return localStorage.getItem(expiresAt)
}
function setExpiresAt(expiresIn) {
    let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime())
    localStorage.setItem(expiresAt, expiresAt)
}
function removeExpiresAt(){
    localStorage.removeItem(expiresAt)
}
function getUser() {
    return JSON.parse(localStorage.getItem(user))
}
function setUser(user) {
    localStorage.setItem(user, JSON.stringify(user))
}
function removeUser(){
    localStorage.removeItem(user)
}
export default {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    getExpiresAt,
    setExpiresAt,
    removeExpiresAt,
    getUser,
    setUser,
    removeUser
}
