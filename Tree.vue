<template>
  <ul class="tree">
    <li class="tree-node" v-for="(node, index) in data" :key="node[defaultProps.label]">
      <i v-if="node.children" class="iconfont" :class="{'icon-down': showChildren[index], 'icon-right': !showChildren[index]}"></i>
      <span calss="node-label" @click="handleClick(index)">{{node[defaultProps.label]}}</span>
      <keep-alive>
        <base-tree v-if="node.children && showChildren[index]" :data="node[defaultProps.children]" />
      </keep-alive>
    </li>
  </ul>
</template>
<script>
export default {
  name:'base-tree',
  props: {
    data: {
      type: Array,
      required: true
    },
    defaultProps: {
      type: Object,
      default: () => ({
        label: "label",
        children: "children"
      })
    }
  },
  data() {
    return {
      content: "neirong",
      showChildren: []
    };
  },
  created() {
    console.log(this.data);
  },
  methods:{
    handleClick(index){
      const flag = !this.showChildren[index]
      // this.showChildren.splice(index, 1, flag)
      this.$set(this.showChildren, index, flag)
      // this.showChildren[index] = !this.showChildren[index];
    }
  }

};
</script>
<style scoped>
@import "./assets/font.css";

li {
  list-style: none;
}
.tree-node {
  font-size: 14px;
  cursor: pointer;
}
.tree-node .iconfont {
  color: #c0c4cc;
  font-size: 12px;
  margin-right: 5px;
  vertical-align: middle;
}
.node-label {
  font-size: 14px;
  color: #606266;
  vertical-align: middle;
}
</style>