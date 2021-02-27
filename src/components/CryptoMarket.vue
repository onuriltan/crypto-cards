<template>
  <div class="crypto-market">
    <div class="crpto-market__item" v-for="market in cryptoMarketsData" :key="market.id">
			<CollapsibleItem :marketData={market} />
		</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { cryptoMarketService } from '@/services/cryptomarket'
import { CryptoMarketData } from '@/types'
import CollapsibleItem from '@/components/CollapsibleItem.vue'

export default Vue.extend({
  name: 'CryptoMarket',
  components: {
    CollapsibleItem
  },
  data: function() {
    return {
      cryptoMarketsData: [] as CryptoMarketData[]
    };
  },
  created: function () {
     const marketData = cryptoMarketService();
     this.cryptoMarketsData = marketData
  }
});
</script>

<style scoped lang="scss">
 .crypto-market {
	max-width: 768px;
	margin: 0 auto;
 }
</style>
