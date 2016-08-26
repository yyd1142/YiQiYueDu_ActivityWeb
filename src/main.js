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
  },
  '/course_detail': {
    component: require('./components/wechatCourseDetail.vue'),
    name: 'wechatCourse'
  },
  '/video': {
    component: require('./components/video.vue'),
    name: 'video'
  },
  '/video_detail': {
    component: require('./components/videoDetail.vue'),
    name: 'video'
  },
  '/offline': {
    component: require('./components/offline.vue'),
    name: 'offline'
  },
  '/offline_detail': {
    component: require('./components/offlineDetail.vue'),
    name: 'offline'
  }
})

router.start(App, '#app')
