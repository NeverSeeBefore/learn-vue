<template>
  <div class="question">
    <div class="id">问题id{{id}}</div>
    <div class="title"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null
    };
  },
  created() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
  }
};
</script>