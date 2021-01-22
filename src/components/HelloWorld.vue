
<template>
<div id="enterButton">
  <button @click="auth.login()">Зайти в ВК</button>
</div>
</template>

<script>
import auth from "@/auth";
export default {
  name: 'HelloWorld',
  data(){

    return {
      auth,
      logState:0,
    }
  },
  methods:{
    forceRenderLog() {
      this.logState +=1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
