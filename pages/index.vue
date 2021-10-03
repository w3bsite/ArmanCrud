<template>
  <div class="col-md-4 mx-auto card p-5">
    <form @submit.prevent="send">
      <div class="form-group">
        <label for="exampleInputEmail1">Sample text</label>
        <input
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter your text"
        >
      </div>
      <button class="btn btn-primary" @click="send">
        Submit
      </button>
    </form>

    <div v-if="res" class="mx-auto card-body">
      <h4>server response</h4>
      {{ res }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data () {
    return {}
  },
  computed: {
    ...mapState('post', ['form', 'res'])
  },
  methods: {
    send () {
      this.$store.dispatch('post/create_post')
    }
  }
})
</script>

<style>
.card {
  margin-top: 100px;
}
</style>
