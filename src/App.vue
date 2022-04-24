<template>
  <div class="mb-4">
    <nav class="bg-light py-2">
      <div class="container-fluid">
        <router-link to="/">Random.now</router-link>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
  a {
    text-decoration: none!important;;
    color: black!important
  }
</style>
