<template>
  <el-container>
    <el-header>
    </el-header>
    <el-main style="overflow: hidden">
      <el-row style="height: 100%">
        <el-col :span="6" style="height: 100%">
          <div class="v-col">
            <div style="height: 100px;width: 100px;background-color: #ff6944">
              <P>Node接口服务</P>
            </div>
          </div>
          <!--<el-card>-->
          <!--  <p>Node接口服务</p>-->
          <!--</el-card>-->
        </el-col>
        <el-col :span="18" style="height: 100%">
          <div class="v-col-2">
            <div v-for="(item,index) in info_1" class="list_1">
              <img :src="item.image" alt="标签图片" style="width: 45px;margin-left: 20px" >
              <div style="margin-left: 20px;width: 275px">
                <p style="font-size: 18px;font-weight: bolder;margin-bottom: 8px">{{item.text}}</p>
                <p style="font-weight: bold">{{item.info}}</p>
              </div>
              <el-button type="primary" v-on:click="handleButtonClick(index)" style="margin-left: 170px;padding: 10px">
                <img width="30px" :src="item.image2">
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <div v-for="item in info_2" class="footer_box">
        <div>
          <p>{{item.text}}</p>
        </div>
        <img v-if="item.image" :src="item.image" style="width: 25px;margin-left: 5px">
      </div>

    </el-footer>
  </el-container>
</template>

<script>

import new_head from "@/components/NewHead.vue";
import router from "@/router";

export default {
  name: 'HomeView',
  data() {
    return {
      info_1: [
        {
          text:'接口服务文档',
          info:'Interface Service Documentation',
          image:require('../../public/image/api.png'),
          image2:require('../../public/image/向右.png')
        },
        {
          text:'接口测试(建设中)',
          info:'API testing(Alpha)',
          image:require('../../public/image/黑盒测试.png'),
          image2:require('../../public/image/向右.png')
        },
        {
          text:'其余页面正在建设中(咕咕咕)',
          info:'Rest of the pages are under construction',
          image:require('../../public/image/页面建设中.png'),
          image2:require('../../public/image/鸟.png')
        }
      ],
      info_2: [
        {
          text:'公安备案',
          image:''
        },
        {
          text:'宁ICP备2023001392号-1',
          image:''
        },
        {
          text:'Powered By Node.js',
          image:require('../../public/image/Node.png')
        },
        {
          text:'Powered By Vue.js',
          image:require('../../public/image/Vue.png')
        },
      ]
    }
  },
  methods:{
    handleButtonClick(index){
      if (index === 0){
        this.$router.push('interface')
      }
      if (index === 1){
        this.$router.push('test')
      }
      // if (index === 2){
      //   this.$router.push('other')
      // }
    }
  },
  components:{
    new_head
  }

}
</script>

<style>
.el-container{
  height: 100%;
}
.el-header{
  padding: 0 !important;
  min-height: 60px;
  background: linear-gradient(0deg, rgba(135, 204, 254, 0.00) 0%, #5bc0ff 100%);
}
.el-footer{
  padding: 0 !important;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(242, 189, 255, 0.00) 0%, #e98bff 100%);
}

.v-col{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.v-col-2{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.list_1{
  display: flex;
  height: 90px;
  width: 600px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.34);
  transition: all 200ms;
}
.list_1:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.68);
}
.footer_box{
  width: auto;
  padding: 5px 20px 5px 20px;
  height: 25px;
  margin: 0 50px 0 50px;
  line-height: 25px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
}
</style>