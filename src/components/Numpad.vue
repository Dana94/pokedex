<template>
  <div class="numpad">
    <button v-for="i in 9" :key="i.id" @click="$emit('update', id += i)">{{ i }}</button>
    <button value="0" @click="$emit('update', id += 0)" >0</button>
    <button @click="submit" class="enter">Enter</button>
  </div>
</template>

<script>
export default {
  name: "Numpad",
  data() {
    return {
      id: ''
    };
  },
  methods: {
    digit (value) {
      this.id = value;
      alert(this.id)
    },
    submit () {

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
    &.enter {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>