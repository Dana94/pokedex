<template>
  <div class="door" :class="{open: isOpen}">
    <div class="latch" @click="openDoor">
      <div class="button"></div>
    </div>
    <div class="side1"></div>
    <div class="side2"></div>
    <div class="side3">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Door",
  props: {
    msg: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openDoor() {
      this.isOpen = true;
    }
  }
};
</script>

<style scoped lang="scss">
.door {
  transform: rotateY(180deg);
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". . ."
    "col1 col2 col3";
  border-top: 32px solid transparent;

  &.open {
    animation: open 2s cubic-bezier(0.64, 0.76, 0.2, 1) forwards;
  }

  .side1 {
    height: 318px;
    border-top: 50px solid transparent;
    width: 100%;
    grid-area: col1;
    background-color: #e21708;
    border-left: 1px solid;
  }

  .side2 {
    grid-area: col2;
    border-left: 134px solid #e21708;
    border-top: 57px solid transparent;
  }

  .side3 {
    grid-area: col3;
    border-top: 58px solid transparent;
    .inner {
      background-color: #e21708;
      height: 100%;
      border-radius: 0 0 15px 0px;
    }
  }
}

.latch {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 50%;
  background-color: yellow;
  right: 10px;

  .button {
    height: 0;
    border-top: 15px solid transparent;
    border-left: 15px solid purple;
    border-bottom: 15px solid transparent;
    position: absolute;
    right: 10px;
    top: 5px;
  }
}

@keyframes open {
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: translateX(400px);
  }
}
</style>
