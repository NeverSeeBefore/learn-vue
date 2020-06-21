import Vue from 'vue';
import * as mutationTypes from '../mutation-types';

export default {
  state: {
    studentList: [],
  },
  getters: {
    studentLength: state => state.studentList.length,
    studentUnder18: state => state.studentList.filter(student => student.age < 18)
  }
}