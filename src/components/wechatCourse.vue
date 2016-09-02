<template>
  <header-component></header-component>
  <div class="page-view-home">
    <div class="home-label wechat-label">我参与的活动</div>
    <div class="activity-list-view wechat-list-view">
      <div class="activity-tab-view">
        <span class="activity-tab-cell" v-for="item in tabs" :class="item.active" @click="tab($index)">{{item.name}}</span>
        <div class="city-select-view">
          <span>选择城市：</span>
          <select class="city-select-main">
            <option>全部</option>
            <option>全部</option>
            <option>全部</option>
          </select>
          <select class="city-select-main">
            <option>全部</option>
            <option>全部</option>
            <option>全部</option>
          </select>
        </div>
      </div>
      <ul class="activity-table-view">
        <li class="activity-table-cell wechat-content" v-for="item in 10">
          <img src="../assets/image-square.png" />
          <span class="acitivi-name">袁晓峰－如何开展亲子阅读（微课堂）</span>
          <span class="acitivi-date">活动时间：2016年8月12日  19:30</span>
          <span class="acitivi-content">家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用</span>
          <span class="acitivi-btn"><a v-link="{path: '/course_detail' + '#top'}">点击进入</a></span>
          <div class="wechat-baoming">
            <span>限时免费</span>
            <a v-link="{path: '/course_detail' + '#top'}" >报名</a>
          </div>
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
  </div>
  <footer-component></footer-component>
</template>

<script src="../js/wechatCourse.js" type="text/javascript"></script>

<style lang="less" src="../style/wechatCourse.less"></style>
