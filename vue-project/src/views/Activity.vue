<template>
  <div class="activity">
    <div class="nav-box">
      <router-link :to="{name: 'academic'}">学术讨论</router-link>
      <router-link :to="{name: 'personal'}">个人中心</router-link>
      <router-link :to="{name: 'download'}">资源下载</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.activity{
  padding: 20px;
}
a{
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
  color: #3385ff;
  text-decoration: none;
}
a.router-link-exact-active{
  background-color: #3385ff;
  color: #fff;
}
</style>

