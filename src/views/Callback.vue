<template>
  <div class="callback">Callback</div>
</template>

<script>

export default {

name: "Callback.vue",
  mounted() {

    this.$auth.handleAuthentication().then(() => {
      this.$router.push({ name: 'Home' })

    })
    .catch(() => console.log(123))
  }
}
</script>

<style scoped>

</style>