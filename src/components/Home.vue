<template>
  <div class="container-fluid">
    <div class="text-center">
      <div class="row">
        <div class="card border-0">
          <div class="card-header border-0"><h1>Welcome to Random</h1></div>
          <div class="h4 mt-2">Choose a tool for what you wish to randomize</div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-4 bg-info">
          <router-link to="/randomizer"> <h2>Randomizer</h2> </router-link>
        </div>
        <div class="col-4 bg-warning">
          <router-link to="/number"><h2>Random number</h2></router-link>
        </div>
        <div class="col-4 bg-primary">
          <router-link to="/coinflip"><h2>Coinflip</h2></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>