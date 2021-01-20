<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld/>
    <logout/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import logout from "@/components/logout";
export default {
  name: 'Home',
  components: {
    HelloWorld, logout
  }

}
</script>
