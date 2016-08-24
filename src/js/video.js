"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
var tabs = [{name: '全部', active: 'video-tab-active'},{name: '进行中的活动', active: ''},{name: '已结束的活动', active: ''}];
var videotbas = [{name: '直播', active: 'video-active'}, {name: '录播', active: ''}];
module.exports = {
  data() {
    return {
      tabs: tabs,
      tabPanel: 0,
      videotbas: videotbas
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
          item.active = 'video-tab-active'
        }else{
          item.active = ''
        }
      });
      this.tabPanel = index;
    },
    videoTab(index){
      videotbas.forEach(function(item){
        if(videotbas.indexOf(item) == index){
          item.active = 'video-active'
        }else{
          item.active = ''
        }
      });
    }
  }
};
