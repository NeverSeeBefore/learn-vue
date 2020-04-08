import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./views/Home";
// import Student from "./views/Student";
// import Learn from "./views/Learn";
// import Activity from "./views/Activity";
// import About from "./views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    // alias: '/'
  },{
    path: '/home',
    component: Home,
    // alias: '/'
  },
  {
    path: "/learn",
    component: () => import('./views/Learn')
  },
  {
    path: '/student',
    component: () => import('./views/Student')
  },
  {
    path: '/question/:id',
    component: () => import('./views/Question')
  },
  {
    path: '/activity',
    component: () => import(/* webpackThunkName: 'academic' */'./views/Activity'),
    // redirect: '/activity/academic',
    redirect: {name: 'academic'},
    // redirect: (to) => {
    //   // console.log(to);
    //   return{
    //     name: 'academic'
    //   }
    // },
    children:[
      {
        name: 'academic',
        path: 'academic',
        component: () => import(/* webpackThunkName: 'academic' */'./views/Academic')
      },
      {
        name: 'personal',
        path: 'personal',
        component: () => import('./views/Personal')
      },
      {
        name: 'download',
        path: 'download',
        component: () => import('./views/Download')
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  // linkActiveClass: "active-link"
  // linkExactActiveClass: "exact-link"
})