
<template>

  <div id="logoutButton">
    <button @click="$auth.logout(), auf();">Выйти из ВК</button>
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

    }
  },
methods: {
  auf() {
    console.log(auth.isAuthenticated())
  },
  forceRenderLogout(){
    this.logoutState +=1
  }
},
}
</script>

<style scoped>

</style>