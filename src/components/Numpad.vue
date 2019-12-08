<template>
  <div class="numpad">
    <button v-for="i in 9" :key="i.id" @click="$emit('update', id += i)">{{ i }}</button>
    <button value="0" @click="$emit('update', id += 0)" >0</button>
    <button @click="submit" class="enter">Enter</button>
  </div>
</template>

<script>
import { instance } from '../axios-auth';

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
    },
    submit () {
      instance.get('pokemon/' + this.id)
      .then(res => {
        console.log(res);
        this.$store.commit('SET_POKEMON', { data: res.data, })
      })
      .catch(error => console.log(error))
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
    &.enter {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
}
</style>