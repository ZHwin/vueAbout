// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

'use strict';
import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import store from '../src/store/store';
import router from './router';
import lottie from 'vue-lottie';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.component('lottie', lottie);
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */

// document.addEventListener('deviceready', function () {
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
//   window.navigator.splashscreen.hide()
// }, false);

 

