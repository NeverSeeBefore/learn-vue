<template>
  <div id="app">
    <div class="nav-box">
      <!-- <router-link to="/" exact tag="div" class="logo">渡一教育</router-link> -->
      <div class="logo" @click="handleClick">渡一教育</div>
      <div class="nav-list">
        <router-link to="/" exact tag="a">首页</router-link>
        <router-link to="/learn" tag="a">课程学习</router-link>
        <router-link to="/about" tag="a">关于</router-link>
        <router-link to="/activity" tag="a">社区</router-link>
        <router-link to="/student" tag="a">学员展示</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    handleClick() {
      // console.log(this.$router);
      // console.log(this.$route);
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
html,
body{
  margin: 0;
  padding: 0;
}
.nav-box{
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  background: #3385ff;
  padding: 0 40px;
}
.nav-box .logo{
  color: #fff;
}
.nav-box .nav-list a{
  text-decoration: none;
  margin-left: 20px;
  color: #fff;
}
a.router-link-active{
  font-weight: bolder;
}
</style>
