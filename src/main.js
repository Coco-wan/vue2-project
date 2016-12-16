// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import 'muse-components/style/base.less'
import App from './App'
import VueRouter from 'vue-router'
import routes from './core/route'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
});
