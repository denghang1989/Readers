<template>
  <div class="activity-detail">
    <header class="detail-header">
    
    </header>
    <main class="detail-main">
      <div class="activity-datetime">
      
      </div>
      
      <group title="书名">
        <x-input disabled="true"></x-input>
      </group>
      <group title="作者">
        <x-input disabled="true"></x-input>
      </group>
      <group title="活动时间">
        <x-input disabled="true"></x-input>
      </group>
      <group title="活动地址">
        <x-input disabled="true"></x-input>
      </group>
      <group title="人数">
        <x-input disabled="true"></x-input>
      </group>
      <group title="活动介绍">
        <x-textarea disabled="true"></x-textarea>
      </group>
      <div class="image">
        <swiper :list="imageList">
        </swiper>
      </div>
    </main>
    <footer class="detail-footer"></footer>
  </div>
</template>

<script>
  import {Group, XInput, XTextarea, Swiper, SwiperItem} from 'vux';
  
  export default {
    name: "ActivityDetail",
    components: {SwiperItem, Swiper, XTextarea, Group, XInput},
    data() {
      return {
        imageList: [],
        activity: {}
      }
    },
    created() {
      this.activity = this.$route.query.data;
    }
  }
</script>

<style scoped>

</style>
