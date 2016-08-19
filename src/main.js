import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
var router = new VueRouter({
  history: true
})

router.map({
  '/': {
    component: require('./components/home.vue')
  },
  '/login': {
    component: require('./components/login.vue')
  },
  '/register': {
    component: require('./components/register.vue')
  }
})
router.start(App, '#app')
