
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
// window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Articles from './components/Articles.vue';

Vue.use(VueRouter);

const router = new VueRouter({
   routes :[
       {
           path:'/',
           name:'home',
           component:Home
       },{
           path:'/register',
           name:'register',
           component:Register
       }, {
           path: '/login',
           name: 'login',
           component: Login
       },{
           path:'/articles',
           name: 'articles',
           component:Articles
       }
   ]
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const app = new Vue({
//     el: '#app'
// });
new Vue({
    el:'#app',
    router: router,
    render : app => app(App)
});