<template>
  <div id="app">
    <HelloWorld msg="Welcome to Crypto Cards"/>
    <CryptoMarket />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CryptoMarket from './components/CryptoMarket.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    CryptoMarket
  }
});
</script>

<style lang="scss">
#app {
   font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
