<template>
  <div class="numpad">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>0</button>
  </div>
</template>

<script>
export default {
  name: "Numpad",
  data() {
    return {};
  },
  method: {
      
  }
};
</script>
<style lang="scss" scoped>
.numpad {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-gap: 10px;
  position: absolute;
  top: 90px;
  right: 3rem;
  button {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>