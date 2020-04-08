<template>
  <div class="demo">
    <button @click="handleClick">show/hide</button>
    <div v-if="show">不需要首屏加载的组件</div>
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
    handleClick(){
      this.show = !this.show
    }
  }
};
</script>
