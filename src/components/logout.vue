<template>
  <div id="logoutButton">
    <button @click="$auth.logout()">Выйти из ВК</button>
  </div>
</template>

<script>
import auth from "@/auth";
export default {

name: "logout",
  data(){
    return {
      auth

    }
  },
}
</script>

<style scoped>

</style>