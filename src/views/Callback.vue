<template>
  <div class="callback">Callback</div>
</template>

<script>
import auth from "@/auth";
export default {

name: "Callback.vue",
  data() {
    return {
      auth
    }
  },
  mounted() {

    this.auth.handleAuthentication().then(() => {
      this.$router.push({ name: 'Home' })

    })
    .catch(() => console.log(123))
  }
}
</script>

<style scoped>

</style>