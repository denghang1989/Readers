<template>
  <div class="book-detail">
    <flexbox orient="horizontal">
      <flexbox-item :span="4">
        <x-img></x-img>
      </flexbox-item>
      <flexbox-item :span="8">
        <div class="book-content">
          <div class="title">
            <span>{{activity.title}}</span>
          </div>
          
          <div class="datetime">
            <span>{{activity.dateOfActivity}}</span>
            <span>{{activity.startTime}}-{{activity.endTime}}</span>
          </div>
          
          <div class="person-number">
            <span>人数：{{activity.numberOfParticipants}}</span>
          </div>
          
          <div class="creator">
            <span>发起人：{{activity.name}}</span>
          </div>
          
          <div class="label">
            <span>{{activity.gender}}</span>
            <span>{{activity.age}}</span>
            <span>{{activity.profession}}</span>
            <span>{{activity.constellation}}</span>
          </div>
          <div class="desc">
            {{activity.selfIntroduction}}
          </div>
          
          <div class="book-footer">
            <span class="like" v-on:click="handleLike(activity)">
              <img v-if="activity.like>0" src="../assets/img/ic_love.png" alt="" width="20px">
              <img v-else src="../assets/img/ic_no_love.png" alt="" width="20px">
            </span>
            <span class="signedUp" v-on:click="handleSignedUp(activity)">
              <span class="signedUp-unActive" v-if="activity.signedUp===0">参加</span>
              <span class="signedUp-active" v-else>已参加</span>
            </span>
          </div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, XButton, XImg, Badge} from 'vux'
  import {openId} from "../store";

  export default {
    name: "BookDetail",
    components: {XImg, Flexbox, FlexboxItem, XButton, Badge},
    props: {
      activity: {
        type: Object,
        default: function () {
          return {
            "activityId": 25,
            "title": "读书活动《信息技术》",
            "dateOfActivity": "2018-09-17",
            "startTime": "22:09:09",
            "endTime": "22:09:43",
            "book": "创业维艰",
            "address": "上海",
            "maxNumberOfParticipants": 4,
            "numberOfParticipants": 1,
            "name": "周杰",
            "gender": "男",
            "age": 33,
            "profession": "会计",
            "constellation": "白羊座",
            "selfIntroduction": "不想介绍自己",
            "like": 0,
            "signedUp": 0
          }
        }
      }
    },
    methods: {
      handleLike(activity) {
      
      },
      handleSignedUp(activity) {
      
      }
    },
  }
</script>

<style lang="less" scoped>
  .book-detail {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .book-content > div {
    margin-bottom: 5px;
    color: #333;
  }
  
  .title > span {
    color: black;
  }
  
  .label {
    color: #333;
    font-size: 12px;
  }
  
  .label > span {
    padding: 1px 5px;
    margin-right: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .signedUp-unActive {
    padding: 1px 5px;
    margin-right: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: inline-block;
    width: 48px;
    text-align: center;
  }
  
  .signedUp-active {
    padding: 1px 5px;
    margin-right: 5px;
    border: 1px solid red;
    border-radius: 5px;
    display: inline-block;
    width: 48px;
    text-align: center;
    color: red;
  }
  
  .datetime, .person-number, .creator {
    font-size: 14px;
  }
  
  .book-footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
  }
  
  .book-footer > span {
    margin-right: 20px;
  }
</style>
