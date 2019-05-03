<template>
  <div class="reader-edit">
    <group class="edit-from" title="编辑用户资料">
      <cell-box>
        头像
      </cell-box>
      <x-number title="年龄" :min="12" :max="99" :value="1"></x-number>
      <x-input title="行业" placeholder="请输入行业"></x-input>
      <x-input title="职业" placeholder="请输入职业"></x-input>
      <x-input title="微信号" placeholder="请输入微信号"></x-input>
      <x-input title="电话（非必须）" placeholder="请输入微信号"></x-input>
      <x-input title="爱好书籍类型" placeholder=""></x-input>
    
    </group>
    <group title="一句话签名">
      <x-textarea :max="40"></x-textarea>
    </group>
  </div>
</template>

<script>
  import {Group, XInput, Cell, CellBox, XNumber, XTextarea} from 'vux';
  import {openId} from "../store";
  
  export default {
    name: "EditPerson",
    components: {XInput, Group, Cell, CellBox, XNumber, XTextarea}
  }
</script>

<style scoped>
  .reader-edit {
    padding-top: 10px;
  }
</style>
