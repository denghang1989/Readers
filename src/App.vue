<template>
  <div class="app" id="app">
    <header class="reader-header">
      <x-header>
        <span>读者</span>
      </x-header>
    </header>
    <main class="reader-main">
      <router-view></router-view>
    </main>
    <footer class="reader-footer">
      <tabbar>
        <tabbar-item v-for="(item,index) in tabList" :key="index" :link="item.link" :selected="index===0">
          <img slot="icon" :src="item.icon" alt="">
          <img slot="icon-active" :src="item.iconActive" alt="">
          <span slot="label">{{item.label}}</span>
        </tabbar-item>
      </tabbar>
    </footer>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem} from "vux";
  
  export default {
    name: "App",
    data() {
      return {
        tabList: [
          {
            icon: require("./assets/img/ic_main_home.png"),
            iconActive: require("./assets/img/ic_main_home_check.png"),
            label: "首页",
            link: "/home"
          },
          {
            icon: require("./assets/img/ic_main_add.png"),
            iconActive: require("./assets/img/ic_main_add_check.png"),
            label: "发布",
            link: "/activity"
          },
          {
            icon: require("./assets/img/ic_main_person.png"),
            iconActive: require("./assets/img/ic_main_person_check.png"),
            label: "我的",
            link: "/me"
          }
        ]
      }
    },
    components: {XHeader, Tabbar, TabbarItem},
  }
</script>

<style lang="less">
  
  @import '~vux/src/styles/reset.less';
  
  .app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  .reader-header {
    width: 100%;
    height: 46px;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  
  .reader-footer {
    width: 100%;
    height: 56px;
    position: fixed;
    bottom: 0;
  }
  
  .reader-main {
    padding-top: 46px;
    padding-bottom: 56px;
  }
</style>
