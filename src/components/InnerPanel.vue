<template>
  <div class="panel">
    <div class="side1">
      <div class="screen"></div>
      <div class="inner"></div>
    </div>
    <div class="side2"></div>
    <div class="side3"></div>
  </div>
</template>

<script>
export default {
  name: "InnerPanel",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.panel {
  position: absolute;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". . ."
    "p1 p2 p3";
  border-top: 32px solid transparent;
}

.side1 {
  grid-area: p1;
  border-top: 58px solid transparent;
  position: relative;
  .screen {
    height: 140px;
    width: 140px;
    background-color: grey;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .inner {
    background-color: #e21708;
    height: 100%;
    border-radius: 0 0 0 15px;
  }
}

.side2 {
  grid-area: p2;
  border-right: 133px solid #e21708;
  border-top: 57px solid transparent;
}

.side3 {
  height: 318px;
  border-top: 50px solid transparent;
  width: 100%;
  grid-area: p3;
  background-color: #e21708;
}
</style>
