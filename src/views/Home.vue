<template>
  <div>
    {{isAuth}}
    <div class="Home">Home</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="auth.isAuthenticated()">
       <logout
       v-on:forceRender="forceRenderHome()"
       />

    </div>
  <div v-else>
        <HelloWorld/>

  </div>
  </div>

</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import logout from "@/components/logout";

import auth from "@/auth";
export default {
  name: 'Home',
  components: {
    HelloWorld, logout
  },

  data(){
    return {
      auth,
      isAuth:false,

    }
  },
  mounted() {
    console.log(auth.isAuthenticated());

  },
  beforeUpdate() {
    console.log('render');
  },
  methods:{
    forceRenderHome() {
      this.isAuth = true
      console.log(this.isAuth)
    }
  }
}
</script>
