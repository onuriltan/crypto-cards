<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This project will show extendible crypto card components that you can moniyor markets<br>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">

</style>
