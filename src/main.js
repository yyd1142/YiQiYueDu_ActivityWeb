import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: require('./components/home.vue'),
    name: 'home'
  },
  '/login': {
    component: require('./components/login.vue'),
    name: 'login'
  },
  '/register': {
    component: require('./components/register.vue'),
    name: 'register'
  },
  '/my_activity': {
    component: require('./components/myActivity.vue'),
    name: 'home'
  },
  '/wechat_course': {
    component: require('./components/wechatCourse.vue'),
    name: 'wechatCourse'
  }
})
router.start(App, '#app')
