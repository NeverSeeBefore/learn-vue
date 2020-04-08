<template>
  <div id="app">
    <HelloWorld :level="1">标题</HelloWorld>
    <button @click="handleAsyne">加载异步组件</button>
    <async-comp v-if="show"></async-comp>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  
    // AsyncComp: () => import('./components/AsycnComp')
    AsyncComp: () => import('./components/AsycnComp')
  },
  data(){
    return{
      show: false
    }
  },
  methods:{
    handleAsyne(){
      this.show = !this.show
    }
  }
}
</script>
