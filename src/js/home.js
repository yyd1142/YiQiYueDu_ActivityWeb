"use strict"
import headerComponent from '../components/headerComponent.vue'
import footerComponent from '../components/footerComponent.vue'
var i = 0;
var _isSlider = [];
var _isRecentActivity = [];
var _isActivityTotal = [];
var _isPreviousActivity = [];
var _isSliderUpdate = true;
var _isRecentActivityUpdate = true;
var _isActivityTotalUpdate = true;
var _isPreviousActivityUpdate = true;
module.exports = {
  data() {
    return {
        silderWidth: Math.ceil(47 / 4) * 696,
        goTop: false,
        slidenLength: '',
        pageInfo: {
            page: '',
            pageCount: '',
            pageNumber: ''
        },
        sliderItems: [],
        recentActivityItems: [],
        activityTotalItems: [],
        previousActivityItems: []
    }

  },
  components: {
    headerComponent,
    footerComponent
  },
  ready(){
    this.mrmjSlider();
    this.recentActivity();
  },
  methods: {
    slider(id){
        var len = this.slidenLength;
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
    },
      //名人名家列表
      mrmjSlider(){
          var self = this;
          if(!_isSliderUpdate){
              this.slidenLength = _isSlider.datas.length;
              this.sliderItems = _isSlider.datas;
              return;
          }
          var params = {};
          this.$httpGet('mrmj', params, function (code, data) {
              if (code == 0) {
                  self.sliderItems = data.response.datas;
                  self.slidenLength = data.response.datas.length;
                  _isSlider = data.response;
                  _isSliderUpdate = false;
              }else{}
          });
      },
      //近期活动列表
      recentActivity(){
          var self = this;
          if(!_isRecentActivityUpdate){
              this.recentActivityItems = _isRecentActivity.datas;
              this.pageInfo = {
                  page: _isRecentActivity.page,
                  pageCount: _isRecentActivity.pageCount,
                  pageNumber: _isRecentActivity.pageNumber
              };
              return;
          }
          var params = {};
          this.$httpGet('activity/recent', params, function (code, data) {
              if (code == 0) {
                  self.recentActivityItems = data.response.datas;
                  self.pageInfo = {
                      page: data.response.page,
                      pageCount: data.response.pageCount,
                      pageNumber: data.response.pageNumber
                  };
                  _isRecentActivity = data.response;
                  _isRecentActivityUpdate = false;
              }else{

              }
          });
      },
      //总报名人数
      activityTotal(){
          var self = this;
          if(!_isActivityTotalUpdate){
              this.activityTotalItems = _isActivityTotal;
              return;
          }
          var params = {
              m: ''
          };
          this.$httpGet('', params, function (code, data) {
              if (code == 0) {
                  self.activityTotalItems = data.response;
                  _isActivityTotal = data.response;
                  _isActivityTotalUpdate = false;
              }else{

              }
          });
      },
      //以往活动
      previousActivity(){
          var self = this;
          if(!_isPreviousActivityUpdate){
              this.previousActivityItems = _isPreviousActivity;
              return;
          }
          var params = {
              m: ''
          };
          this.$httpGet('', params, function (code, data) {
              if (code == 0) {
                  self.previousActivityItems = data.response;
                  _isPreviousActivity = data.response;
                  _isPreviousActivityUpdate = false;
              }else{

              }
          });
      }
  }
};
