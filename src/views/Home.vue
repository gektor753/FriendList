<template>
  <div>
    {{homeState}}
    <div class="Home">Home</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="auth.isAuthenticated()">

       <logout/>
      <button @click="forceRenderHome()">click</button>
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
      homeState:0,

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
      this.homeState +=1
      console.log(this.homeState)
    }
  }
}
</script>
