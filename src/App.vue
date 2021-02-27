<template>
  <div id="app">
    <HelloWorld msg="Welcome to Crypto Cards"/>
    <CryptoMarket />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CryptoMarket from './components/CryptoMarket.vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    CryptoMarket
  }
});
</script>

<style lang="scss">
  $main-bg: white;
  $body-color: #111;
  $theme-colors: (
    "primary": black,
  );
  $font-family: monospace;
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
