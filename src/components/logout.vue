<template>
  <div id="logoutButton">
    <button @click="$auth.logout()">Зайти в ВК</button>
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