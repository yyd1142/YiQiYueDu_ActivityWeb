var tabs = [{name: '活动首页', active: 'header-active', url: '/', path: 'home'},
  {name: '微课堂', active: '', url: '/wechat_course' ,path: 'wechatCourse'},
  {name: '视频讲座', active: '', url: '/', path: 'video'},
  {name: '线下活动', active: '', url: '/', path: 'offline'}];
module.exports = {
  data() {
    return {
      tabs: tabs
    }
  },
  ready(){
    let pathName = this.$route.name;
    tabs.forEach(function(item){
      if(pathName == item.path){
        item.active = 'header-active'
      }else{
        item.active = ''
      }
    })
  },
  methods: {

  }
};
