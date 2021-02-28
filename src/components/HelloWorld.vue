<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.svg" width="150" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss"></style>
