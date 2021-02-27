<template>
  <div class="sparkline">
    <canvas class="sparkline__canvas" width="200" height="44" :id="canvasId"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SparkLine',
  data: function() {
    return {
      canvasId: this.marketName+'canvas',
    };
  },
  props: {
    sparkLineIn7d: {
      type: Array as () => number[],
      required: true
    },
    marketName: String
  },
  created: function () {
    // this.sparkline()
  }
});
</script>

<style scoped lang="scss">


</style>
