<template>
  <header-component></header-component>
  <div class="page-view-home">
    <div class="home-label">名人名家</div>
    <div class="home-mrmj-view">
      <div class="mrmj-button left" @click="slider(0)"></div>
        <div class="mrmj-slider-view">
          <div class="mrmj-slider wrap" :style="{width: silderWidth + 'px'}" id="slide">
            <div class="slider-item" v-for="slider in sliderItems">
              <img :src="slider.headURL | headURLFilter"/>
              <span class="slider-name" v-text="slider.name"></span>
              <span class="slider-content" v-text="slider.desc"></span>
            </div>
          </div>
        </div>
      <div class="mrmj-button right" @click="slider(1)"></div>
    </div>
    <div class="home-user-view">
        <img src="../assets/image-square.png"/>
        <span class="home-user-name">姓名：朱莉亚</span>
        <span class="home-user-loginnumber">登录号： 808000</span>
        <span class="home-activity-times">我参与的活动：<a v-link="{path: '/my_activity' + '#top'}">0</a>场</span>
    </div>
    <div class="home-label">近期活动</div>
    <div class="activity-list-view">
      <ul class="activity-table-view">
        <li class="activity-table-cell" v-for="activity in recentActivityItems">
          <img :src="activity.imageURL | headURLFilter" />
          <span class="acitivi-name" v-text="activity.name"></span>
          <span class="acitivi-date">活动时间：{{activity.startTime | dateFormatFilter}}</span>
          <span class="acitivi-content" v-text="activity.desc"></span>
          <span class="acitivi-btn"><a v-link="{path: '/course_detail?id=' + activity.id + '#top'}">点击进入</a></span>
        </li>
      </ul>
      <div class="fenye-view">
        <ul class="fenye-table-view">
          <li class="fenye-table-cell shangyiye">上一页</li>
          <li class="fenye-table-cell" v-for="page in pageInfo.pageCount">{{$index + 1}}</li>
          <li class="fenye-table-cell xiayiye">下一页</li>
        </ul>
      </div>
    </div>
    <div class="activity-zongbaoming">
      <div class="activity-header">
        <div class="activity-header-item">活动总报名</div>
        <div class="activity-header-number">
            <span style="color: #0cadc3;">14567</span>人
        </div>
        <ul class="zongbaoming-table-view">
          <li class="zongbaoming-table-cell" v-for="item in 5">
            <img src="../assets/image-square.png" />
            <span class="zongbaoming-name">张三&nbsp;7月15日&nbsp;11:42&nbsp;报名了</span>
            <span class="zongbaoming-content">袁晓峰－如何开展亲子阅读（线下活动）</span>
          </li>
        </ul>
      </div>
      <div class="activity-header">
        <div class="activity-header-item">以往活动</div>
        <div class="activity-header-number">
          <span style="color: #0cadc3;cursor: pointer"> 更多>> </span>
        </div>
        <ul class="zongbaoming-table-view">
          <li class="zongbaoming-table-cell old-activity" v-for="item in 5">
            <img src="../assets/image-square.png"  class="old-activity-img"/>
            <span class="old-activity-content">袁晓峰－如何开展亲子阅读（线下活动）</span>
          </li>
        </ul>
      </div>
      <div class="activity-header">
        <div class="activity-header-item">相关新闻</div>
        <div class="activity-header-number">
          <span style="color: #0cadc3;cursor: pointer"> 更多>> </span>
        </div>
        <ul class="zongbaoming-table-view">
          <li class="new-table-cell" v-for="item in 5">
            <i class="news-point"></i>
            <span>袁晓峰－如何开展亲子阅读（线下活动）</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="home-label">合作伙伴</div>
    <ul class="cooperation-table-view">
      <li class="cooperation-table-cell" v-for="item in 16">
        <img src="../assets/image-square.png" />
      </li>
    </ul>
  </div>
  <footer-component></footer-component>
</template>
<script src="../js/home.js" type="text/javascript"></script>
<style src="../style/home.less" lang="less" scoped></style>
