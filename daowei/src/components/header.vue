<template>
  <header id="header" class="transparent">
    <div class="sticky-wrapper">
      <div class="sticky-wrapper">
        <nav class="navbar navbar-default navbar-transparent" role="navigation">
          <div class="container">
            <div class="navbar-header navbar-left">
              <router-link class="navbar-brand navbar-brand-img" to="/">
                <img src="../img/logo.png" class="img-responsive logo-white" alt="logo" width="100" height="auto">
                <img src="../img/logo.png" class="img-responsive logo-fixed" alt="logo" width="100" height="auto">
              </router-link>
            </div>
            <div class="collapse navbar-collapse navbar-right" id="main-menu">
              <ul class="nav navbar-nav" id="navbar-nav">
                <li id="position">
                  <a to="###">
                    <img src="../img/citypoint.png" width="20" height="auto">
                    <i id="showCity" style="margin-right:5px;color:#000">北京</i>
                    <i id="city">切换城市</i>
                  </a>
                </li>
                <li @click="firstClick">
                  <router-link  to="/first" >
                    首页
                  </router-link>
                </li>
              <!--  <li >
                  <router-link to="/download">
                    下载APP
                  </router-link>
                </li>-->
                <li>
                  <router-link to="/servy">服务商</router-link>
                </li>
                <li>
                  <router-link to="/cooperation">商家入驻</router-link>
                </li>
                <li>
                  <router-link to="/about">
                    关于我们
                  </router-link>
                </li>
                <li class="shanghu-right" style="margin-right:10px;">
                  <router-link id="shanghu" class="shanghu" target="_blank" to="/login" >
                    商家登录
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav></div>
    </div>
  </header>
</template>

<script>
  import Vue from 'vue'

    export default {
methods:{
  firstClick(){
      this.$router.replace('/kong')
  }
}
    }
</script>

<style>

</style>
