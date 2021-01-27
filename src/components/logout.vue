
<template>

  <div id="logoutButton">
    <button @click="auth.logout(), $emit('forceRender');">Выйти из ВК</button>

  </div>

</template>


<script>
import auth from "@/auth";


export default {
name: "logout",
  data(){

    return {
      auth,
      logoutState:0,
      friendList:[],

    }
  },
  mounted() {
    if (localStorage.getItem('friendList')) {
      this.friendList = JSON.parse(localStorage.getItem('friendList'));
    }
  },
methods: {


},
}
</script>

<style scoped>

</style>