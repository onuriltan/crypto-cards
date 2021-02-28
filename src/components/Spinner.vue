<template>
  <div class="spinner"><div></div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Spinner",
});
</script>

<style scoped lang="scss">
.spinner {
  display: inline-block;
  transform: translateZ(1px);
}
.spinner > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: rgba(255, 183, 0, 0.879);
  animation: spinner 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes spinner {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>
