// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import $axios from  "./utils"
import FastClick from "fastclick"
import store from "./store/index"

Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)
Vue.prototype.$axios = $axios
Vue.config.productionTip = false

FastClick.attach(document.body);  //解决移动端300ms延迟
/* eslint-disable no-new */


router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem('token')) { //判断本地是否存在token
      next();
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if (to.fullPath == "/login") {
    if (localStorage.getItem('token')) {
      next({
        path: from.fullPath
      });
    } else {
      next();
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
