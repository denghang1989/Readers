<template>
  <div class="initiation">
    <ul class="list-ui">
      <li class="list-item" v-for="(item,index) in activityList" :key="index">
        <BookDetail :activity="item"></BookDetail>
      </li>
    </ul>
  </div>
</template>

<script>
  import BookDetail from "../components/BookDetail";
  import {openId} from "../store";

  export default {
    name: "Initiation",
    components: {BookDetail},
    data() {
      return {
        activityList: []
      }
    },
    methods: {
      getActivityList(openId) {
        this.$http.get(`/api/activity/findByInitiator?openId=${openId}`).then(({data}) => {
          console.log(data);
          this.activityList = data;
        })
      }
    },
    mounted() {
      this.getActivityList(openId)
    }
  }
</script>

<style scoped>
  .initiation {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  .list-ui {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
  }
  
  .list-item {
    padding: 5px 0;
    width: 100%;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }
</style>
