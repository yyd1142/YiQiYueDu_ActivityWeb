<template>
  <nav class="header-view">
    <div class="logo-view" v-link="{path: '/#top'}"></div>
    <div class="header row">
      <a class="header-item" v-for="item in tabs" :class="item.active" v-link="{path: item.url + '#top'}">
        {{item.name}}
        <i class="active-icon"></i>
      </a>
    </div>
    <div class="user-header ui">
      <img src="../assets/image-square.png" />
      <span>朱莉亚</span>
      <i class="sanjiao-icon"></i>
      <ul class="menu-table-view">
        <li class="menu-table-cell">修改密码</li>
        <li class="menu-table-cell">我的活动</li>
        <li class="menu-table-cell"><a v-link="{path: '/login#top'}">退出</a></li>
      </ul>
    </div>
  </nav>
  <div class="hidden-view-header" id="top"></div>
  <div class="go-top" v-if="goTop" v-on:click="backTop()">返回顶部</div>
</template>

<script src="../js/header.js"></script>

<style src="../style/header.less" lang="less"></style>
