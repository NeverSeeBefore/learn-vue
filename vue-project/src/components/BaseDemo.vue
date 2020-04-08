<template>
  <div class="demo">
    <button @click="handleClick">click</button>
    <div class="box-wrapper">
      <transition>
        <div v-if="show" class="box">hello world</div>
      </transition>
      <transition name="anther">
        <div v-if="show" class="box">hello world</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
.box-wrapper{
  width: 800px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: 5px solid rebeccapurple;
  box-sizing: border-box;
}

.anther-enter {
  opacity: 0;
  transform: translateX(-200px);
}
.anther-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.anther-enter-active {
  transition: all 0.5s;
}
.anther-leave {
  opacity: 1;
  transform: translateX(0);
}
.anther-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.anther-leave-active {
  transition: all 0.5s;
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
</style>