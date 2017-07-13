<template>
    <div id="datail" v-show="dshow">
      <div class="service-center" v-if="ditProduct">
        <h2 class="h2">所有分类<i class="bright">&gt;</i><i id="categoryId">家庭保洁</i><i class="bright">&gt;</i><i class="cnav"></i></h2>
        <div class="centerleft" style="width: 960px">
          <div id="curauto" class="ctop" style="border-top: 1px solid #e5e5e5;">
            <img class="pic" :src="ditProduct.serviceImg" width="160" height="160">
            <span class="spm">
                <i>{{ditProduct.name}}</i>
                <i>价格<b>{{ditProduct.price}}<em>元/小时</em></b>
                  <b class="oldpic" style="display: inline-block">原价<em>{{ditProduct.oldprice}}元</em></b></i>
                <i style="display: none">优惠<em class="youhui" style="display: none"></em>
                  <em class="youhui" v-show="ditProduct.youhui">{{ditProduct.youhui}}</em></i>
                <i>已售<em class="yishou">{{ditProduct.yishou}}</em></i>
            </span>
            <span class="spf">
                <i id="qrcode"><canvas width="115" height="115"></canvas></i>
                <b>扫一扫</b><b>立即预约</b>
            </span>
          </div>
          <div class="cdown">
            <b>服务描述</b>
            <p id="servicePriceDescription" v-html="ditProduct.description"></p>
            <b>服务范围</b>
            <p>{{ditProduct.serviceCity}}</p>
            <b>服务时间</b>
            <p>{{ditProduct.serviceTime}}<i>最近可预约时间:<em>{{ditProduct.nearTime}}</em></i></p>
            <b>订购须知</b>
            <p id="orderingNotice" style="background: #fffcf1" v-html="ditProduct.orderingNotice"></p>
            <b>商家简介</b>
            <p id="serviceDescription" v-html="ditProduct.serviceDescription">
             </p>
          </div>
        </div>
        <div class="centerright" style="position: relative; margin-left: 10px">
          <div class="rightct" style="cursor: pointer">
            <h3>服务商</h3>
            <img style="text-align: center; margin:40px 50px; margin-bottom: 10px" src="http://img.daoway.cn/img/6bbc9d19-c2b0-4e70-8a5c-8e6d3ca3abd3.jpg" width="80" height="80">
            <p style="text-align: center; margin-bottom: 20px; font-weight: bold">{{ditProduct.smp}}</p>
            <p>成功接单<i>{{ditProduct.yishou}}</i></p>
            <p>接单率<i>96%</i></p>
            <p>好评率<i>{{ditProduct.haoping}}%</i></p>
          </div>
          <div class="erweima"><img src="../img/daowayApp.png" width="130" height="auto"></div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
    export default {
    props:['ditProduct'],
        data(){
            return {
              dshow:false
            }
        },
      methods:{
        showDetail(value){
            this.dshow=value
        }
      }
    }
</script>

<style>
  .service-center {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .h2 {
    line-height: 85px;
    width: 1200px;
    margin: 0 auto;
    font-size: 18px;
  }
  .h2 i {
    cursor: pointer;
  }
  .bright {
    margin: 0 10px;
    font-weight: normal;
  }
  .centerleft {
    width: 970px;
    float: left;
    margin-bottom: 50px;
  }


  #curauto {
    cursor: auto;
  }

  .ctop {
    height: 220px;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-top: none;
    cursor: pointer;
  }
  .pic {
    border: 1px solid #e5e5e5;
    margin: 30px;
    float: left;
  }
  .spm {
    float: left;
    position: relative;
    top: 25px;
  }
  .spm i:nth-child(1) {
    font-size: 18px;
    color: #1d1515;
  }
  .spm i {
    display: block;
    line-height: 42px;
    height: 42px;
  }
  .spm i b {
    font-size: 20px;
    color: #fc545e;
    margin-left: 10px;
  }
  .spm i b em {
    font-size: 14px;
    font-style: normal;
  }
  .spm i b.oldpic {
    font-size: 14px;
    color: #898989;
    margin-left: 40px;
    font-weight: normal;
  }
  .spm i .youhui {
    border: 1px solid #fb474f;
    color: #fb474f;
    font-size: 12px;
    padding: 0 6px;
    border-radius: 6px;
    text-align: center;
    font-style: normal;
    margin-left: 10px;
    height: 24px;
    line-height: 24px;
  }
  .spm i .yishou {
    color: #fb474f;
    margin-left: 10px;
    font-style: normal;
  }
  .spf {
    float: right;
    margin: 20px 60px 0 0;
  }
  audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
  }
  .spf b {
    display: block;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
  }
  .spf b:nth-child(3) {
    color: #fb474f;
  }
  .cdown {
    clear: both;
    background: #fff;
    padding: 30px 20px;
    border: 1px solid #e5e5e5;
    margin-top: 10px;
  }
  .cdown b {
    border-bottom: 3px solid #fb474f;
    padding: 5px;
    margin-top: 10px;
    width: 70px;
    display: block;

  }
  .cdown p {
    line-height: 24px;
    margin: 15px 0 5px;
    font-size: 14px;
  }

  .rightct p{
    font-size:20px;
  }

  .rightct p i {
    float: right;
    color: #fb474f;
  }
</style>
