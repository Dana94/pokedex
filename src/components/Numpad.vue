<template>
  <div class="numpad">
    <button v-for="i in 9" :key="i.id" @click="digit(i)">{{ i }}</button>
    <button value="0" @click="digit(0)">0</button>
  </div>
</template>

<script>
export default {
  name: "Numpad",
  data() {
    return {
      id: null
    };
  },
  method: {
    digit (num) {
      this.id = num;
    }
  }
};
</script>
<style lang="scss" scoped>
.numpad {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-gap: 10px;
  position: absolute;
  top: 3rem;
  right: 2rem;
  button {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>