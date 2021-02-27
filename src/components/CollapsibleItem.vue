<template>
  <div class="collapsible-item">
    <div class="collapsible-item__toggle" tabindex="0">
      <div class="collapsible-item__toggle__item">
        <img class="collapsible-item__toggle__item__image" :src="marketData.market.image"/>
        <div class="collapsible-item__toggle__item__name">
          <div class="collapsible-item__toggle__item__name__value">{{ marketData.market.symbol.toUpperCase() }}-USD</div>
          <div class="collapsible-item__toggle__item__name__name">{{ marketData.market.name }}</div>
        </div>
      </div>
      <div class="collapsible-item__toggle__item">
        <SparkLine :sparkLineIn7d="marketData.market.sparkline_in_7d.price" :marketName="marketData.market.symbol"/>
      </div>
      <div class="collapsible-item__toggle__item">
         <div class="collapsible-item__toggle__item__price">
            <div class="collapsible-item__toggle__item__price__value">${{ marketData.market.current_price }}</div>
             <div class="collapsible-item__toggle__item__price__name">Price</div>
         </div>
      </div>
    </div>
      <div class="collapsible-content">
      <div class="content-inner">
        <p>{{ marketData }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CryptoMarketData } from '@/types'
import SparkLine from './SparkLine.vue';

export default Vue.extend({
  name: 'CollapsibleItem',
  components: {
    SparkLine
  },
  props: {
    marketData: {
      type: Object as () => CryptoMarketData,
      required: true
    },
  }
});
</script>

<style scoped lang="scss">
  .collapsible-item {
    margin-bottom: 1.2rem 0;
    border-bottom: 1px solid lightgrey;
    &__toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      color: black; 
      background: white;
      cursor: pointer;
      border-radius: 7px;
      transition: all 0.25s ease-out;
      &__item {
        display: flex;
        align-items: center;
        &__image {
           width: 20px;
          height: 20px;
          padding-right: 5px;
        }
        &__name {
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: flex-start;
           &__value {
            font-weight: bold;
            font-size: 1.2rem;
            text-transform: uppercase;
          }
          &__name {
            font-size: 1rem;
          }
        }
        &__price {
          @extend .collapsible-item__toggle__item__name;
          align-items: flex-end;
          &__value {
            font-weight: bold;
            font-size: 1.2rem;
            text-transform: uppercase;
          }
          &__name {
            font-size: 1rem;
          }
        }
      }
      &:hover {
        color: #7C5A0B;
      }
    }
  }
  .collapsible-content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height .25s ease-in-out;
  }

  .collapsible-item__toggle:checked + .lbl-toggle + .collapsible-content {
    max-height: 100vh;
  }

  .collapsible-item__toggle:checked + .lbl-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .collapsible-content .content-inner {
    background: rgba(0, 105, 255, .2);
    border-bottom: 1px solid rgba(0, 105, 255, .45);
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: .5rem 1rem;
  }
</style>
