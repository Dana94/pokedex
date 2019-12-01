<template>
  <div id="app">
    <div class="square red">
      <InnerPanel/>
      <Door/>
    </div>
  </div>
</template>

<script>
import InnerPanel from "@/components/InnerPanel.vue";
import Door from '@/components/Door.vue'

export default {
  name: 'app',
  components: {
    InnerPanel,
    Door
  }
}
</script>

<style lang="scss" scoped>
.square {
  height: 500px;
  width: 400px;
  border-radius: 15px;
  &.red {
    background-color: red;
  }
}
</style>
