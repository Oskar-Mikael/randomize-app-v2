<template>
  <div class="container-fluid">
    <div class="text-center">
      <h3>
        Number randomizer
      </h3>
      <div class="row" style="margin-top: 5rem">
        <div class="col-12">
        <h5>
          Choose a number between
        </h5>
        <div class="form-group">
          <input class="form-control mx-auto text-center" v-model="from" style="width:10%" type="number"/>
          <span class="mx-2 my-auto">and</span>
          <input class="form-control mx-auto text-center" v-model="to" style="width:10%" type="number"/>
        </div>
      </div>
      <div class="mt-4">
        <button class="btn btn-primary" @click="randomize">
          Go
        </button>
      </div>
      <div class="mt-4">
        <div class="h5">Result:</div>
        <span class="font-bold">
          {{ this.result }}
        </span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Number",

    data() {
      return {
        from: "",
        to: "",
        result: ""
      }
    },

    methods: {
      randomize() {
        this.result = Math.floor(Math.random() * (this.to - this.from + 1)) + this.from
      }
    }
}
</script>

<style>

</style>