<template>
  <div class="panel">
    <div class="side1">
      <Light/>
      <div class="screen" :style="{backgroundImage: `url(${imageSrc})`}"></div>   
      <div class="inner"></div>
      
    </div>
    <div class="side2">
      
    </div>
    <div class="side3">
      <select id="type-select">
        <option value="">--Please choose an input type--</option>
        <option value="name">Name</option>
        <option value="id">ID</option>
      </select>
      <input v-model="entered"/>
      <Numpad @update="id = $event"/>
      <Keyboard @update="name = $event"/>
    </div>
  </div>
</template>

<script>
import Light from './Light.vue';
import Numpad from './Numpad.vue';
import Keyboard from './Keyboard.vue';

export default {
  name: "InnerPanel",
  data() {
    return {
      id: '',
      name: '',
    };
  },
  components: {
    Light,
    Numpad,
    Keyboard
  },
  computed: {
    entered () {
      return this.id + this.name;
    },
    imageSrc () {
      if (!this.$store.getters.isData) return;
      return this.$store.getters.getImage;
    }
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
    top: 4rem;
    left: 28px;

    background-repeat: no-repeat;
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
  height: 418px;
  border-top: 50px solid transparent;
  width: 100%;
  grid-area: p3;
  background-color: #e21708;
  position: relative;
}

input {
  position: absolute;
  right: 2rem;
  top: 3rem;
}

#type-select {
  position: absolute;
  right: 2rem;
  width: 10.8rem;
}
</style>
