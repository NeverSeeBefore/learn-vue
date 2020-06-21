<template>
  <div>
    <button @click="handleClick">{{storeCount}}</button>
    <div>getters.doubleCount {{ $store.getters.countDouble }}</div>
    <div>getters.addCount {{ $store.getters.countAdd(3) }}</div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
import {COUNT_INCREMENT} from '@/store/mutation-types';

export default {
  data() {
    return {
      count: 100
    };
  },
  created() {
    console.log(this.$store);
    console.log(mapState(['count/count']))
  },
  computed: {
    ...mapState({
      // storeCount: 'count/count'
    }),
  },
  methods: {
    handleClick() {
      // this.$store.state.count++;
      // this.$store.commit('countIncrement')
      // this.$store.commit(COUNT_INCREMENT, {num: Math.random()})
      // this.$store.commit({ //  整个对象会被传入payload
      //   type: COUNT_INCREMENT,
      //   num: Math.random()
      // })
      this.$store.dispatch('count/' + "countIncrease", {num: 12}).then(res => {
        console.log('action 结束');
      })
    }
  }
};
</script>

