<template>
  <div class="about">
    <div>添加学生</div>
    <div>
      姓名：
      <input type="text" v-model="name"/>
    </div>
    <div>
      年龄：
      <input type="text" v-model="age"/>
    </div>
    <div>
      <button @click="handleClick">添加</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name: '',
      age:''
    }
  },
  methods:{
    handleClick(){
      console.log(this.name, this.age)
      this.$store.state.studentList.push({name: this.name, age: this.age, id: + new Date()})
    }
  }
}
</script>
