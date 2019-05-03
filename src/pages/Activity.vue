<template>
  <div class="reader-activity">
    <group title="书名">
      <x-input placeholder="请输入书名" required></x-input>
    </group>
    <group title="作者">
      <x-input placeholder="请输入作者" required></x-input>
    </group>
    <group title="活动时间">
      <datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']"
                title="选择日期时间"></datetime>
    </group>
    <group title="活动地址">
      <x-input placeholder="请输入书名" required></x-input>
    </group>
    <group title="参加人数">
      <x-number title="人数" :min="1" :max="5" :value="1"></x-number>
    </group>
    <group title="活动介绍">
      <x-textarea :max="100"></x-textarea>
    </group>
    
    <div class="imageUpload">
      <uploader
        :files=[]
        v-model="fileList"
        limit="9"
        @onChange="onChange"
      >
      </uploader>
    
    </div>
    
    <box gap="10px">
      <x-button text="发布活动" type="primary"></x-button>
    </box>
  </div>
</template>

<script>
  import {Group, XInput, Datetime, XNumber, XTextarea, XButton, Box} from 'vux';
  import {openId} from "../store";
  import Uploader from 'vux-uploader-component'
  
  export default {
    name: "Activity",
    components: {Uploader, Box, XButton, Group, XInput, Datetime, XNumber, XTextarea},
    data() {
      return {
        minuteListValue: "",
        fileList: []
      }
    },
    methods: {
      onChange(fileList) {
        console.log(fileList);
      }
    },
  }
</script>

<style scoped>
  .reader-activity {
    padding-top: 10px;
  }
</style>
