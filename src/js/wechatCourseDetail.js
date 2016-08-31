"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import baomingModal from '../components/baomingModal.vue'
module.exports = {
  data() {
    return {
      baomingModal: '',
      baomingStep: ''
    }
  },
  components: {
    headerComponent,
    footerComponent,
    'baoming-modal': {
      template: baomingModal.template,
      props: {
        modalShow: '',
        step: ''
      },
      methods: {
        cancel(){
          let bodyEl = document.body;
          bodyEl.style.overflow = 'auto';
          this.modalShow = false;
        }
      }
    }
  },
  methods: {
    baoming(){
      this.baomingStep = 1;
      let bodyEl = document.body;
      bodyEl.style.overflow = 'hidden';
      this.baomingModal = true;
    }
  }
};
