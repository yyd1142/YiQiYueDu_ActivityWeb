"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
var i = 0;
module.exports = {
  data() {
    return {
      silderWidth: Math.ceil(47 / 4) * 696,
      goTop: false
    }
  },
  components: {
    headerComponent,
    footerComponent
  },
  methods: {
    slider(id, len){
        var siderX = null;
        var x = null;
        var el = document.getElementById('slide');
        var pageNum = Math.ceil(len / 4);
        console.log(pageNum);
        if(id == 0){
            if(i <= pageNum - 1 && i != 0){
                i = i - 1;
                x = 696 * i;
                siderX = 'translateX(-' + x + 'px)';
            }else{
              i = 0;
              siderX = 'translateX(0)';
            }
        }else{
            if(i < (pageNum - 1)){
                i = i + 1;
                x = 696 * i;
                siderX = 'translateX(-' + x + 'px)';
            }else{
                i = 0;
                siderX = 'translateX(0)';   //回到最开始
            }
        }
        console.log(i);
        el.style.transform = siderX;
        el.style.MozTransform = siderX;
        el.style.WebkitTransform = siderX;
    }
  }
};
