"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
module.exports = {
  data() {
    return {
      modalShow: '',
      step: 1
    }
  },
  components: {
    headerComponent,
    footerComponent
  },
  methods: {
    baoming(){
      this.step = 1;
      let bodyEl = document.body;
      bodyEl.style.overflow = 'hidden';
      this.modalShow = true;
    },
    cancel(){
      let bodyEl = document.body;
      bodyEl.style.overflow = 'auto';
      this.modalShow = false;
    }
  }
};
