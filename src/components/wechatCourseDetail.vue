<template>
  <header-component></header-component>
  <div class="wechat-header-view">
    <div class="wechat-header-main">
      <img src="../assets/image-square.png" />
      <span class="header-title">袁晓峰－如何开展亲子阅读（微信课堂）</span>
      <span class="header-content">家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用</span>
      <span class="header-date">报名截止时间：2016年8月12日 19:00<br>活动时间：2016年8月12日 19:30～20:30</span>
      <span class="header-price">￥200</span>
      <div class="header-baoming">
        <span class="header-baoming-btn" v-on:click="baoming()">报名</span>
        <div class="baomingrenshu">已有<span>456</span>人报名</div>
      </div>
    </div>
  </div>
  <div class="page-view-home wechat-detail-view">
    <div class="home-label">参与流程</div>
    <div class="wechat-step-view">
      <img src="../assets/matter/images/baoming_step_03.png"/>
    </div>
    <div class="home-label">活动介绍</div>
    <div class="wechat-jieshao">
      家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用
    </div>
    <div class="home-label">主持人介绍</div>
    <ul class="zhuchiren-table-view">
      <li class="zhuchiren-table-cell" v-for="iten in 3">
        <img src="../assets/image-square.png" />
        <span class="zhuchiren-name">吴磊</span>
        <span class="zhuchiren-content">家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也会有相同的疑问，在这里阅读推广人袁晓峰就这个问题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用</span>
      </li>
    </ul>
    <div class="home-label">留言板</div>
    <ul class="message-table-view">
      <li class="message-table-cell" v-for="item in 3">
        <img src="../assets/image-square.png"/>
        <div class="message-name">
          <span>张粑粑</span>
          <span>2016-09-08&nbsp;&nbsp;13:30:40</span>
        </div>
        <span class="message-content">题给大家做一个分享，带着家长的疑问，我们来看看用什么方式在家庭教育阅读中起到关键的作用家长如何开展亲子阅读活动，一直是我们研究和讨论的重要话题之一，相信很多家长也</span>
        <div class="reply-view" v-if="$index == 0">
          <span class="reply-name">官方回复：</span>
          <span class="reply-content">谢谢您的支持，我们将策划多的活动让大家吸收知识。</span>
        </div>
      </li>
    </ul>
    <div class="reply-warp">
      <span class="liuyanban">我要留言</span>
      <form class="reply-form">
        <textarea class="reply-area"></textarea>
        <button type="button" class="reply-btn">发表留言</button>
      </form>
    </div>
  </div>
  <footer-component></footer-component>
  <div class="modal-warp" v-if="modalShow">
    <div class="modal-view">
      <div class="modal-header">
        <span class="modal-header-title">活动报名</span>
        <span class="header-name">袁晓峰－如何开展亲子阅读（微课堂）</span>
        <i class="close-icon" v-on:click="cancel()"></i>
      </div>
      <div class="modal-body" v-show="step == 1">
        <form class="modal-form">
          <div class="modal-input">
            <label>微信号：</label>
            <input type="text" placeholder="请输入微信号"/>
          </div>
          <div class="modal-input">
            <label>手机号码：</label>
            <input type="tel" placeholder="请输入手机号码" maxlength="11"/>
          </div>
        </form>
      </div>
      <div class="action-view" v-show="step == 1">
        <div class="next-btn" @click="step = 2">下一步</div>
      </div>

      <!--第二步-->
      <div class="modal-body" v-show="step == 2">
        <div class="modal-price">本次活动报名费用为<span>2</span>元</div>
      </div>
      <div class="action-view" v-show="step == 2">
        <div class="pay-btn" >确定支付</div>
        <div class="cancel-btn" v-on:click="cancel()">取消</div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script src="../js/wechatCourseDetail.js" type="text/javascript"></script>

<style lang="less" src="../style/wechatCourseDetail.less"></style>
