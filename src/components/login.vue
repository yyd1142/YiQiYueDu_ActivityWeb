<template>
  <nav class="header-view">
    <div class="logo-view"></div>
  </nav>
  <div class="login-view">
    <div class="login-header">阅读活动大厅</div>
    <form class="login-form">
      <div class="login-segment">
        <div class="login-field">
          <div class="login-input">
            <i class="user icon"></i>
            <input type="text" placeholder="帐号" :class="errorClass">
          </div>
        </div>
        <div class="login-field">
          <div class="login-input">
            <i class="password icon"></i>
            <input type="password" placeholder="密码" :class="errorClass">
          </div>
        </div>
        <div class="login-text">请验证您的账号确保活动参与者是本人</div>
        <div class="login-button" v-on:click="login()">验证账号</div>
      </div>
    </form>
    <div class="form validation warp" v-if="error">
      <ul class="form validation table-view">
        <li>请输入正确帐号或密码</li>
        <li>登录失败</li>
        <li>此帐号不存在</li>
      </ul>
    </div>
  </div>
</template>
<script src="../js/login.js" type="text/javascript"></script>
<style src="../style/login.less" lang="less"></style>
