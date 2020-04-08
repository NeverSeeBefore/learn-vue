<template>
  <div id="app">
    <HelloWorld :level="1">标题</HelloWorld>
    <base-demo></base-demo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BaseDemo from './components/BaseDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BaseDemo
  }
}
</script>
