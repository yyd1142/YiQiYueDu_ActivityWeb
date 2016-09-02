"use strict"
import md5 from 'js-md5';
import hintView from '../components/hintViewComponent.vue';
module.exports = {
  data() {
    return {
      validation: false,
      errorcode1: false,
      errorcode2: false,
      item: {},
      userNumberErrorStyle: '',
      passwordErrorStyle: '',
      hintText: '',
      hintShow: ''
    }
  },
  components: {
    'hint-view': {
      template: hintView.template,
      props: {
        message: '',
        hashint: ''
      },
      ready(){
        let bodyEl = document.body;
        bodyEl.style.overflow = 'hidden';
      },
      methods: {
        closeFn(){
          let bodyEl = document.body;
          bodyEl.style.overflow = 'auto';
          this.hashint = false;
        }
      }
    }
  },
  methods: {
    login(){
      var item = this.item;
      if(item.user == null || item.user == ''){
        this.validation = true;
        this.errorcode1 = true;
        this.userNumberErrorStyle = 'error-item';
      }
      if(item.password == null || item.password == ''){
        this.validation = true;
        this.errorcode2 = true;
        this.passwordErrorStyle = 'error-item';
      }
      this.hintText = '操作无效';
      this.hintShow = true;
      var self = this;
      var params = {
        m: 'login',
        userID: item.name,
        password: md5(item.pwd)
      };
      this.$httpGet('users', params, function (code, data) {
        if (code == 0) {

        } else {

        }
      });
    }
  }
};
