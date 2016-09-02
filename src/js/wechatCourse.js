"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
var tabs = [{name: '全部', active: 'activity-tab-active'},{name: '进行中的活动', active: ''},{name: '已结束的活动', active: ''}];
var _isActivity = [];
var _isActivityUpdate = true;
module.exports = {
  data() {
    return {
      tabs: tabs,
      tabPanel: 0,
      activityItems: []
    }
  },
  components: {
    headerComponent,
    footerComponent
  },
  methods: {
    tab(index){
      tabs.forEach(function(item){
        if(tabs.indexOf(item) == index){
          item.active = 'activity-tab-active'
        }else{
          item.active = ''
        }
      });
      this.tabPanel = index;
    },
    wechatCourse(){
      if(!_isActivityUpdate){
        this.activityItems = _isActivity;
        return;
      }
      var self = this;
      var params = {
        m: ''
      };
      this.$httpGet('', params, function (code, data) {
        if (code == 0) {
          self.activityItems = data.response;
          _isActivity = data.response;
          _isActivityUpdate = false;
        }else{

        }
      });
    }
  }
};
