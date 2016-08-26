var tabs = [{name: '活动首页', active: 'header-active', url: '/', path: 'home'},
  {name: '微课堂', active: '', url: '/wechat_course' ,path: 'wechatCourse'},
  {name: '视频讲座', active: '', url: '/video', path: 'video'},
  {name: '线下活动', active: '', url: '/offline', path: 'offline'}];
module.exports = {
  data() {
    return {
      tabs: tabs,
      goTop: false
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

    var self = this;
    window.onscroll = function(){
      let webHeight = document.body.clientHeight;
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      if(t >= webHeight){
        self.goTop = true;
      }else{
        self.goTop = false;
      }
    }
  },
  methods: {
    backTop(){
      this.goTop = false;
      window.location.href = '#top';
    }
  }
};
