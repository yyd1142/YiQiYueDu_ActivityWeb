<template>
  <nav class="header-view">
    <div class="logo-view" v-link="{path: '/#top'}"></div>
  </nav>
  <div class="hidden-view-header" id="top"></div>
  <div class="login-view">
    <div class="login-header">阅读活动大厅</div>
      <form class="login-form" >
        <div class="login-segment">
          <div class="login-field">
            <div class="login-input">
              <i class="user icon"></i>
              <input type="text" placeholder="帐号" :class="userNumberErrorStyle" v-model="item.user"/>
            </div>
          </div>
          <div class="login-field">
            <div class="login-input">
              <i class="password icon"></i>
              <input type="password" placeholder="密码" :class="passwordErrorStyle" v-model="item.password"/>
            </div>
          </div>
          <div class="login-text">请验证您的账号确保活动参与者是本人</div>
          <div class="login-button" v-on:click="login()">验证账号</div>
        </div>
      </form>
      <div class="form validation warp" v-if="validation" >
        <ul class="form validation table-view">
          <li v-if="errorcode1">请输入账户</li>
          <li v-if="errorcode2">请输入密码</li>
        </ul>
      </div>
  </div>
</template>
<script src="../js/login.js" type="text/javascript"></script>
<style src="../style/login.less" lang="less"></style>
