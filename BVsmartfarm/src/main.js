// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "core-js/es6/promise";
import "core-js/es6/string";
import "core-js/es7/array";
// import cssVars from 'css-vars-ponyfill'
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import VueSweetalert2 from 'vue-sweetalert2';
import VeeValidate from 'vee-validate';
import VueMoment from 'vue-moment';

Vue.use(VueMoment);

Vue.use(VeeValidate);
 
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};
 
Vue.use(VueSweetalert2, options);

// todo
// cssVars()

Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App
  }
});
