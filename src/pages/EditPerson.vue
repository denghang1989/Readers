<template>
  <div class="reader-edit">
    <group class="edit-from" title="编辑用户资料">
      <cell-box>
        <span>头像</span>
        <img src="" alt="">
      </cell-box>
      <x-input v-model="personInfo.name" title="姓名" placeholder="请输入姓名"></x-input>
      <x-number v-model="personInfo.age" title="年龄" :min="12" :max="99"></x-number>
      <x-input v-model="personInfo.industry" title="行业" placeholder="请输入行业"></x-input>
      <x-input v-model="personInfo.profession" title="职业" placeholder="请输入职业"></x-input>
      <x-input v-model="personInfo.wechat" title="微信号" placeholder="请输入微信号"></x-input>
      <x-input v-model="personInfo.phone" title="电话（非必须）" placeholder="请输入微信号"></x-input>
      <x-input v-model="personInfo.favoriteKindOfBook" title="爱好书籍类型" placeholder=""></x-input>
      <popup-picker title="星座" :data="starts" v-model="personInfo.constellationValue"></popup-picker>
    
    </group>
    <group title="一句话签名">
      <x-textarea v-model="personInfo.selfIntroduction" :max="40"></x-textarea>
    </group>
    
    <box gap="10px">
      <x-button text="保存" type="primary" @click.native="savePersonInfo"></x-button>
    </box>
  </div>
</template>

<script>
  import {Group, XInput, Cell, CellBox, XNumber, XTextarea, Box, XButton, PopupPicker} from 'vux';
  import {openId} from "../store";
  import qs from 'qs';
  
  export default {
    name: "EditPerson",
    components: {XButton, Box, XInput, Group, Cell, CellBox, XNumber, XTextarea, PopupPicker},
    data() {
      return {
        personInfo: {
          openId: "135",
          name: "李芳华",
          gender: "女",
          age: 14,
          industry: "金融",
          profession: "销售",
          wechat: "lfh880102",
          phone: "15843321854",
          favoriteKindOfBook: "爱情",
          selfIntroduction: "因为太胖而无法自拔",
          constellation: '摩羯座',
          constellationValue: ["金牛座"]
        },
        starts: [["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座"]]
      }
    },
    methods: {
      getPersonInfo(openId) {
        this.$http.get(`/api/user/findById?openId=${openId}`).then(({data}) => {
          if (data.name) {
            let arr = [];
            arr.push(data.constellation);
            data.constellationValue = arr;
            this.personInfo = data;
          }
        })
      },
      
      savePersonInfo() {
        let postData = this.personInfo;
        postData.constellation = postData.constellationValue[0];
        
        this.$http.post("/api/user/save", qs.stringify(postData)).then(({data}) => {
          if (data.errorCode === 0) {
            this.personInfo = data;
            this.$vux.toast.show({
              text: '成功'
            });
          } else {
            this.$vux.toast.show({
              text: "失败"
            })
          }
        });
      }
    },
    mounted() {
      this.getPersonInfo(openId);
    }
  }
</script>

<style scoped>
  .reader-edit {
    padding-top: 10px;
  }
</style>
