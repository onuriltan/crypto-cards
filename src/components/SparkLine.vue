<template>
  <div class="sparkline">
    <canvas
      class="sparkline__canvas"
      :width="width"
      :height="height"
      :id="canvasId"
    ></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SparkLine",
  data: function() {
    return {
      canvasId: this.marketName + "canvas",
      isDown: false,
      width: 168,
      height: 100,
    };
  },
  props: {
    sparkLineIn7d: {
      type: Array as () => number[],
      required: true,
    },
    marketName: String,
  },
  mounted: function() {
    const difference =
      this.sparkLineIn7d[0] - this.sparkLineIn7d[this.sparkLineIn7d.length - 1];
    if (difference > 0) {
      this.isDown = true;
    }
    this.drawSparkline();
  },
  methods: {
    drawSparkline() {
      const canvas = document.querySelector(
        `#${this.canvasId}`
      ) as HTMLCanvasElement;
      if (canvas && !canvas.getContext) {
        return;
      }
      const ctx = canvas.getContext("2d");
      if (ctx) {
        let time = 0;
        const prevPrice = this.sparkLineIn7d[0];
        const priceLength = prevPrice.toFixed().length - 2;
        let previousPrice = prevPrice / Math.pow(10, priceLength);
        this.sparkLineIn7d
          .slice()
          .reverse()
          .forEach((price, index) => {
            if (index !== 0) {
              const priceLength = price.toFixed().length - 2;
              const scaledPrice = price / Math.pow(10, priceLength);
              this.drawLine(
                ctx,
                [time, previousPrice],
                [time + 1, scaledPrice]
              );
              previousPrice = scaledPrice;
              time = time + 1;
            }
          });
      }
    },
    drawLine(
      ctx: CanvasRenderingContext2D,
      begin: [number, number],
      end: [number, number]
    ) {
      ctx.strokeStyle = this.isDown ? "red" : "green";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(...begin);
      ctx.lineTo(...end);
      ctx.stroke();
    },
  },
});
</script>

<style scoped lang="scss"></style>
