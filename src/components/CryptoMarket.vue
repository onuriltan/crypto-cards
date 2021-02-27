<template>
  <div class="crypto-market">
   
    <div class="crypto-market__controls">
       <div class="crypto-market__controls__info">
        Showing {{currentPage !== 1 ? (currentPage - 1) * perPage : 1}} 
          -  
        {{currentPage !== 1 ? currentPage * perPage : perPage}} out of 250
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="250"
        :per-page="this.perPage"
        aria-controls="my-table"
      ></b-pagination>
      <div class="crypto-market__controls__filters">
        <div class="crypto-market__controls__filters__perPage">
          <div class="crypto-market__controls__filters__perPage__label"> Per Page </div>
          <div class="crypto-market__controls__filters__perPage__select">
            <b-form-select v-model="perPage" :options="perPageOptions" size="sm" class="mt-3"></b-form-select> 
          </div>
        </div>
      </div>
    </div>
    <b-alert variant="danger" show v-if="errorMessage">{{errorMessage}}</b-alert>
    <div class="crypto-market__item-wrapper" v-if="!loading">
      <div class="crpto-market__item-wrapper__item" v-for="market in cryptoMarketsData" :key="market.id">
        <CollapsibleItem :marketData={market} />
      </div>
    </div>
    <div class="crypto-market__loader" v-if="loading">
      <Spinner />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { cryptoMarketService } from '@/services/cryptomarket'
import { CryptoMarketData } from '@/types'
import CollapsibleItem from '@/components/CollapsibleItem.vue'
import Spinner from './Spinner.vue'

export default Vue.extend({
  name: 'CryptoMarket',
  components: {
    CollapsibleItem,
    Spinner
  },
  data: function() {
    return {
      cryptoMarketsData: [] as CryptoMarketData[],
      perPage: 10,
      currentPage: 1,
      loading: true,
      perPageOptions: [
        { value: null, text: 'Please select an option', disabled: true  },
        { value: 10, text: '10' },
        { value: 20, text: '20' },
        { value: 50, text: '50' },
      ],
      errorMessage: ''
    };
  },
  created: async function () {
     await this.getCryptoMarketData(this.currentPage, this.perPage);
  },
  methods:{
    async getCryptoMarketData(pageNumber: number, perPage: number) {
      this.errorMessage = ""
       try {
        const marketData = await cryptoMarketService(pageNumber, perPage);
        this.cryptoMarketsData = marketData
      } catch(e) {
        this.errorMessage = 'An error occured, please try again'
      }
      this.loading = false
    }
  },  
  watch: {
    currentPage: async function (val) {
      this.loading = true
      await this.getCryptoMarketData(val, this.perPage);
    },
    perPage: async function (val) {
      this.loading = true
      await this.getCryptoMarketData(this.currentPage, val);
    }
  }
});
</script>

<style scoped lang="scss">
 .crypto-market {
	max-width: 768px;
	margin: 0 auto;
  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &__info {
      margin-bottom: 1rem;
    }
    &__filters {
      &__perPage {
        margin-bottom: 1rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        &__label {
          font-size: 1rem;
        }
        &__select {
          width: 80px;
        }
      }
    }
  }
  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
}
</style>
