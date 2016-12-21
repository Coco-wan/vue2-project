// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import 'muse-components/style/base.less'
import App from './App'
import VueRouter from 'vue-router'
import routes from './core/route'
import Mint from 'mint-ui'
// import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-carbon.css'
import 'mint-ui/lib/style.css'
import components from '../src/components'
import VueResource from 'vue-resource'


Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
});


Vue.use(Mint);
// Vue.use(MuseUi);
Vue.use(VueRouter);
Vue.use(VueResource);

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
