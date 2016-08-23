<template>
  <nav class="header-view">
    <div class="logo-view"></div>
    <div class="header row">
      <a class="header-item" v-for="item in tabs" :class="item.active" v-link="{path: item.url}">
        {{item.name}}
        <i class="active-icon"></i>
      </a>
    </div>
    <div class="user-header ui">
      <img src="../assets/image-square.png" />
      <span>朱莉亚</span>
    </div>

  </nav>
</template>

<script src="../js/header.js"></script>

<style src="../style/header.less" lang="less"></style>
