<template>
  <div class="demo">
    <button @click="handleClick">add</button>
    <button @click="handleRemove">remove</button>
    <button @click="handleShuffle">SHUFFLE</button>
    <div class="box-wrapper">
      <transition-group tag="ul">
        <li v-for="item in list" :key="item">{{item}}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      show: true,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    handleClick() {
      // this.show = !this.show;
      this.list.splice(
        Math.floor(Math.random() * this.list.length),
        0,
        Math.random()
      );
    },
    handleRemove() {
      this.list.splice(Math.floor(Math.random() * this.list.length), 1);
    },
    handleShuffle(){
      this.list.sort(() => {
        return Math.random() - 0.5
      })
    }
  }
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
li {
  list-style: none;
}
.v-enter {
  opacity: 0;
  transform: translateX(200px);
}
.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.v-enter-active {
  transition: all 0.5s;
}
.v-leave {
  opacity: 1;
  transform: translateX(0);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.v-leave-active {
  transition: all 0.5s;
}
.v-move{
  transition: all .3s;
}
</style>