<template>
  <div class="numpad">
    <button v-for="i in 9" :key="i.id" @click="$emit('update', id += i)" :disabled="disable">{{ i }}</button>
    <button value="0" @click="$emit('update', id += 0)" :disabled="disable">0</button>
  </div>
</template>

<script>
export default {
  name: "Numpad",
  props: {disable: { type: Boolean, required: true}},
  data() {
    return {
      id: ''
    };
  },
  methods: {
    digit (value) {
      this.id = value;
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
  top: 6rem;
  right: 2rem;
  button {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>