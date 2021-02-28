<template>
  <div class="collapsible-item">
    <div class="collapsible-item__toggle" tabindex="0">
      <div class="collapsible-item__toggle__item">
        <img
          class="collapsible-item__toggle__item__image"
          :src="marketData.market.image"
        />
        <div class="collapsible-item__toggle__item__name">
          <div class="collapsible-item__toggle__item__name__value">
            {{ marketData.market.symbol.toUpperCase() }}-USD
          </div>
          <div class="collapsible-item__toggle__item__name__name">
            {{ marketData.market.name }}
          </div>
        </div>
      </div>
      <div class="collapsible-item__toggle__item">
        <SparkLine
          :sparkLineIn7d="marketData.market.sparkline_in_7d.price"
          :marketName="marketData.market.symbol"
        />
      </div>
      <div class="collapsible-item__toggle__item">
        <div class="collapsible-item__toggle__item__price">
          <div class="collapsible-item__toggle__item__price__value">
            ${{ marketData.market.current_price }}
          </div>
          <div
            class="collapsible-item__toggle__item__price__name"
            :class="{
              'collapsible-item__toggle__item__price__name--red':
                priceChange < 0,
              'collapsible-item__toggle__item__price__name--green':
                priceChange > 0,
            }"
          >
            {{ priceChange }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SparkLine from "./SparkLine.vue";

export default Vue.extend({
  name: "CollapsibleItem",
  components: {
    SparkLine,
  },
  data() {
    return {
      priceChange: this.marketData.market.price_change_percentage_24h.toFixed(
        "2"
      ),
    };
  },
  props: {
    marketData: {
      type: Object,
      required: true,
    },
  },
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
        width: 30px;
        height: 30px;
        margin-right: 5px;
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
          &--red {
            color: red;
          }
          &--green {
            color: green;
          }
        }
      }
    }
    &:hover {
      color: #7c5a0b;
    }
  }
}
</style>
