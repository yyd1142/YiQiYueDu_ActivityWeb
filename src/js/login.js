"use strict"

module.exports = {
  data() {
    return {
      validation: false,
      errorcode1: false,
      errorcode2: false,
      item: {},
      userNumberErrorStyle: '',
      passwordErrorStyle: ''
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
    }
  }
};
