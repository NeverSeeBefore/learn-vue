<template>
  <div>
    <div>father</div>
    {{content}}
    <base-son></base-son>
  </div>
  <!-- <div>son</div> -->
  <!-- <p>{{content}}</p> -->
</template>
<script>
import baseSon from './Son';
export default {
  
  components: {
    'base-son': baseSon
  },
  data(){
    return {
      content: 'content in father'
    }
  }
}
</script>
<style>
div{
  background-color: red;
}
</style>