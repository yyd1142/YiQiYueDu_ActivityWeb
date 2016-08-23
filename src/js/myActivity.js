"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
var tabs = [{name: '全部', active: 'activity-tab-active'},{name: '进行中的活动', active: ''},{name: '已结束的活动', active: ''}];
module.exports = {
  data() {
    return {
      tabs: tabs,
      tabPanel: 0
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
    }
  }
};
