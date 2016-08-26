"use strict"

module.exports = {
  data() {
    return {
      error: false,
      errorClass: ''
    }
  },
  methods: {
    login(){
      this.error = true;
      this.errorClass = 'error-item'
    }
  }
};
