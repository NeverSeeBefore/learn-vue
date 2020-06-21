import Vue from 'vue';
import * as mutationTypes from '../mutation-types';

export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    countDouble(state) {
      return state.count * 2
    },
    countAdd: state => num => state.count + num,
  },
  mutations: {
    [mutationTypes.COUNT_INCREMENT]: (state, { num }) => {
      state.count += num || 1;
    },
  },
  actions: {
    countIncrease: (context, payload) => {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          context.commit(mutationTypes.COUNT_INCREMENT, payload);
          reslove()
        }, 1000);
      })
    }
  }
}