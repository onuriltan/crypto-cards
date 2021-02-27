<template>
  <div class="crypto-market">
      {{ cryptoMarketData }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { cryptoMarketService } from '@/services/cryptomarket'
import { CryptoMarketData } from '@/types'

export default Vue.extend({
  name: 'CryptoMarket',
  data: function() {
    return {
      cryptoMarketData: [] as CryptoMarketData[]
    };
  },
  created: function () {
     const marketData = cryptoMarketService();
     this.cryptoMarketData = marketData
  }
});
</script>

<style scoped lang="scss">

</style>
