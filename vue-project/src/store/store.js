import Vue from 'vue';
import Vuex from 'vuex';
import student from './modules/student'
import count from './modules/count'

Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    student,
    count
  },
  // 所有共享状态
  state: {

  },
  // 所有计算属性
  getters: {
 
  },
  mutations: {

  },
  actions: {
  }
})



// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   // 所有共享状态
//   state: {
//     count: 0,
//     studentList: [],
//   },
//   // 所有计算属性

//   getters: {
//     countDouble(state) {
//       return state.count * 2
//     },
//     countAdd: state => num => state.count + num,
//     studentLength: state => state.studentList.length,
//     studentUnder18: state => state.studentList.filter(student => student.age < 18)
//   },
//   mutations: {
//     [mutationTypes.COUNT_INCREMENT]: (state, { num }) => {
//       state.count += num || 1;
//     },
//   },
//   actions: {
//     countIncrease: (context, payload) => {
//       return new Promise((reslove, reject) => {
//         setTimeout(() => {
//           context.commit(mutationTypes.COUNT_INCREMENT, payload);
//           reslove()
//         }, 1000);
//       })
//     }
//   }
// })