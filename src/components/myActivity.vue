<template>
  <header-component></header-component>
  <div class="page-view-home">
    <div class="home-label">我参与的活动</div>
    <div class="activity-list-view">
      <div class="activity-tab-view">
        <span class="activity-tab-cell" v-for="item in tabs" :class="item.active" @click="tab($index)">{{item.name}}</span>
      </div>
      <ul class="activity-table-view">
        <li class="activity-table-cell" v-for="item in 10">
          <img src="../assets/image-square.png" />
          <span class="acitivi-name">袁晓峰－如何开展亲子阅读（微课堂）</span>
          <span class="acitivi-date">活动时间：2016年8月12日  19:30</span>
          <span class="acitivi-content">家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用</span>
          <span class="acitivi-btn"><a href="#">点击进入</a></span>
        </li>
      </ul>
      <div class="fenye-view">
        <ul class="fenye-table-view">
          <li class="fenye-table-cell shangyiye">上一页</li>
          <li class="fenye-table-cell">1</li>
          <li class="fenye-table-cell">2</li>
          <li class="fenye-table-cell">3</li>
          <li class="fenye-table-cell">4</li>
          <li class="fenye-table-cell">5</li>
          <li class="fenye-table-cell">6</li>
          <li class="fenye-table-cell xiayiye">下一页</li>
        </ul>
      </div>
    </div>
    <div class="home-user-view">
      <img src="../assets/image-square.png"/>
      <span class="home-user-name">姓名：朱莉亚</span>
      <span class="home-user-loginnumber">登录号： 808000</span>
      <span class="home-activity-times">我参与的活动：<span style="color: #0cadc3">10</span>场</span>
    </div>
    <div class="activity-zongbaoming">
      <div class="activity-header">
        <div class="activity-header-item">热门活动推荐</div>
        <ul class="zongbaoming-table-view">
          <li class="zongbaoming-table-cell old-activity" v-for="item in 5">
            <img src="../assets/image-square.png"  class="old-activity-img"/>
            <span class="old-activity-content">袁晓峰－如何开展亲子阅读（线下活动）</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer-component></footer-component>
</template>

<script src="../js/myActivity.js" type="text/javascript"></script>

<style src="../style/myActivity.less" lang="less"></style>
