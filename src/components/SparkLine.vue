<template>
  <div class="sparkline">
    <canvas class="sparkline__canvas" :width="width" :height="height" :id="canvasId"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SparkLine',
  data: function() {
    return {
      canvasId: this.marketName+'canvas',
      isDown: false,
      width: 168,
      height: 100
    };
  },
  props: {
    sparkLineIn7d: {
      type: Array as () => number[],
      required: true
    },
    marketName: String
  },
  mounted: function () {
    const difference = this.sparkLineIn7d[0] - this.sparkLineIn7d[this.sparkLineIn7d.length - 1]
    if(difference > 0) {
      this.isDown = true
    }
    this.drawSparkline()
  }, 
  methods: {
    drawSparkline() {
      const canvas = document.querySelector(`#${this.canvasId}`) as HTMLCanvasElement;
      if (canvas && !canvas.getContext) {
          return;
      }
      const ctx = canvas.getContext('2d');
      if(ctx){
        let time = 0
        const prevPrice = this.sparkLineIn7d[0]
        const heightScale = this.height / 100
        let previousPoint = 50
        this.sparkLineIn7d.forEach((price, index) => {
          if(index !== 0 && this.canvasId=== 'btccanvas'){
            const priceDiff = price - prevPrice;
            let percentageDiff = 0
            let newPoint = 0
            percentageDiff = Math.abs(priceDiff / prevPrice * 100) / 10
            if(priceDiff > 0) {
              newPoint = previousPoint + (previousPoint * percentageDiff)
            }
            if(priceDiff < 0) {
              newPoint = previousPoint - (previousPoint * percentageDiff)
            }
            console.log(`prevPrice: ${prevPrice}`)
            console.log(`currentPrice: ${price}`)
            console.log(`priceDiff: ${priceDiff}`)
            console.log(`previousPoint: ${previousPoint}`)
            console.log(`newPoint: ${newPoint}`)
            console.log(`percentageDiff: ${percentageDiff}`)
            console.log(``)
            this.drawLine(ctx,[time, previousPoint], [time+1, newPoint])
            previousPoint = newPoint
            time = time + 1
          }
        })
      }
    },
    drawLine(ctx: CanvasRenderingContext2D, begin: [number, number], end: [number,number]) {
      ctx.strokeStyle = this.isDown ? 'red' : 'green';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(...begin);
      ctx.lineTo(...end);
      ctx.stroke();
    }
  }
});
</script>

<style scoped lang="scss">


</style>
