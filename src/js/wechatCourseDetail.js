"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import baomingModal from '../components/baomingModal.vue'
var _isActivityDetail = [];
var _isActivityDetailUpdate = true;
module.exports = {
  data() {
    return {
      baomingModal: '',
      baomingStep: '',
      activityItem: {}
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
        },
        pay(){

        }
      }
    }
  },
  methods: {
    wechatCourseDetail(id){
      if(!_isActivityDetailUpdate){
        this.activityItem = _isActivityDetail;
        return;
      }
      var self = this;
      var params = {
        m: '',
        id: id
      };
      this.$httpGet('', params, function (code, data) {
        if (code == 0) {
          self.activityItem = data.response;
          _isActivityDetail = data.response;
          _isActivityDetailUpdate = false;
        }else{

        }
      });
    },
    baoming(){
      this.baomingStep = 1;
      let bodyEl = document.body;
      bodyEl.style.overflow = 'hidden';
      this.baomingModal = true;
    }
  }
};
