<template>
  <div>
    <h2>Vue Out side methods Example</h2>
    <div class="main">
      <button @click="firstgear">1st Gear</button>
      <button @click="secondgear">2nd Gear</button>
      <button @click="thirdgear">3rd Gear</button>
      <br />
      <br />
      <br />
      <br />Current gear :
      <span class="gear">{{Currentgear}}</span>
    </div>
  </div>
</template>

<script>
import { engine } from "../engine.js";

export default {
  name: "maincomp",

  data() {
    return {
      Currentgear: "neutral"
    };
  },

  methods: {
    firstgear() {
      this.Currentgear = engine.firstGear();
    },

    secondgear() {
      this.Currentgear = engine.secondGear();
    },

    thirdgear() {
      this.Currentgear = engine.thirdGear();
    }
  }
};
</script>


<style scoped>
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}
button {
  width: 150px;
  height: 40px;
  margin-left: 20px;
  border-radius: 40px;
  outline: none;
  cursor: pointer;
}

span {
  color: #fff;
  background-color: cornflowerblue;
  padding: 5px;
  border-radius: 5px;
}
</style>
