<template>
  <div>
    <div v-show="isShow" id="type" ref="type">
      <!--内容-->
      <div class="h2">
        <div class="h2left">所有分类
          <i class="bright">&gt;</i>
          <i class="cnav">家庭保洁</i><i class="bright">&gt;</i>
        </div>
      </div>
      <div class="navcenter">
        <div class="list1"><span class="fist">分类</span>
          <div>
            <span id="all" class="clickAble red">全部</span>
           <!-- <span v-for=" item in titleList" id="{{item}}" class="clickAble ">{{item}}</span>
-->
            <span id="小时工" class="clickAble ">小时工</span>

            <span id="开荒保洁" class="clickAble ">开荒保洁</span>

            <span id="擦玻璃" class="clickAble ">擦玻璃</span>

            <span id="深度保洁" class="clickAble ">深度保洁</span>

            <span id="家居养护" class="clickAble ">家居养护</span>

            <span id="杀虫灭鼠" class="clickAble ">杀虫灭鼠</span>

          </div>
        </div>
      </div>
      <div class="service-center" style="margin-top: 10px">
        <div class="centerleft" style="width: 960px;">
          <h3 style="width: 100%;border-bottom: none">
            <span class="paihang">
                <i id="recommend" class="activity">推荐排序</i>
                <i id="sale" class="">销量高<img src="../img/fuwu_down2.jpg" width="12" height="7"></i>
                <i id="comment" class="">好评多<img src="../img/fuwu_down2.jpg" width="12" height="7"></i>
                <i id="aheadhours" class="">上门快<img src="../img/fuwu_down2.jpg" width="12" height="7"></i>
                <i id="price" class="">价格低<img src="../img/fuwu_down2.jpg" width="12" height="7"></i>
            </span>

            <span class="spnright"><i id="page" class="cout">1</i>/<i id="pages">55</i><i class="pageup greycolor">上一页</i><i class="pagedown ">下一页</i></span></h3>
          <div class="boxtab xianshi">

            <div v-show="products" v-for="tproduct in showTypes" class="ctop" style="height: 200px" @click="clickdtail(tproduct)">
              <img class="pic" :src="tproduct.serviceImg" width="140" height="140">
              <span class="spm spm2">
                    <i>{{tproduct.name}}</i>
                     <i style="color: #929292" class="descri" v-text="tproduct.description.split('<br>').join(' ')"></i>
                    <i><b style="margin-left: 0">{{tproduct.price}}<em>元/小时</em></b><b class="oldpic" v-show="tproduct.oldprice"><em>{{tproduct.oldprice}}</em></b></i>
                    <i class="navtxt"><b><img src="../img/home1.png" width="18" height="17">{{tproduct.smp}}</b><b>已售<em>{{tproduct.yishou}}</em></b><b>好评<em>{{tproduct.haoping}}%</em></b></i>
                </span>
              <span class="spf quickly">
                    <i>最快上门</i>
                    <i>{{tproduct.zuikuai}}小时</i>
                </span>
            </div>
<!--
            <div detailid="2429946" class="ctop" style="height: 200px">
              <img class="pic" src="http://img.daoway.cn/img/2017/03/22/41491c6c-afd7-449e-9037-e2bf6d72d430_thumb.jpg" width="140" height="140">
              <span class="spm spm2">
                    <i>室内保洁</i>
                     <i style="color: #929292">服务内容：
1.室内保洁服务，2小时起订，服务商携带清洁装备...</i>
                    <i><b style="margin-left: 0">29<em>元/小时</em></b><b class="oldpic" style="display: inline-block"><em>50元</em></b></i>
                    <i class="navtxt"><b><img src="../img/home1.png" width="18" height="17">三鼎家政</b><b>已售<em>28258</em></b><b>好评<em>84%</em></b></i>
                </span>
              <span class="spf quickly">
                    <i>最快上门</i>
                    <i>4小时</i>
                </span>
            </div>

            <div detailid="2429947" class="ctop" style="height: 200px">
              <img class="pic" src="http://img.daoway.cn/img/2016/12/13/8c3823a3-922c-4d4e-a239-40ccbfd3fc46_thumb.jpg" width="140" height="140">
              <span class="spm spm2">
                    <i>4小时室内保洁（可擦玻璃）</i>
                     <i style="color: #929292">服务内容：
1.保洁或擦玻璃，自由搭配但不同时进行，共4小时...</i>
                    <i><b style="margin-left: 0">159<em>元/项</em></b><b class="oldpic" style="display: inline-block"><em>300元</em></b></i>
                    <i class="navtxt"><b><img src="../img/home1.png" width="18" height="17">三鼎家政</b><b>已售<em>1787</em></b><b>好评<em>84%</em></b></i>
                </span>
              <span class="spf quickly">
                    <i>最快上门</i>
                    <i>4小时</i>
                </span>
            </div>

            <div detailid="2382622" class="ctop" style="height: 200px">
              <img class="pic" src="http://img.daoway.cn/img/2017/03/22/83a8ce32-cb8e-4256-9059-377b9a7391b3_thumb.jpg" width="140" height="140">
              <span class="spm spm2">
                    <i>家庭保洁</i>
                     <i style="color: #929292">服务内容：
1.家庭保洁服务，2小时起订，服务商携带清洁装备...</i>
                    <i><b style="margin-left: 0">35<em>元/小时</em></b><b class="oldpic" style="display: inline-block"><em>50元</em></b></i>
                    <i class="navtxt"><b><img src="../img/home1.png" width="18" height="17">来人到家</b><b>已售<em>18854</em></b><b>好评<em>85%</em></b></i>
                </span>
              <span class="spf quickly">
                    <i>最快上门</i>
                    <i>4小时</i>
                </span>
            </div>-->
          </div>
          <div class="fenye2">
            <a class="pageup greycolor">&lt;上一页</a>
            <div id="showPage" style="display: inline-block">

              <a class="num acv">1</a>

              <a class="num ">2</a>

              <a class="num ">3</a>

              <a class="num ">4</a>

              <a class="num ">5</a>

              <a class="num ">6</a>

              <a class="num ">7</a>

              <a class="num ">8</a>

              <a class="num ">9</a>

              ...

            </div>
            <a class="pagedown ">下一页&gt;</a>
          </div>
        </div>
        <div class="centerright" style="position: relative; margin-left: 0">
          <div class="rightct">
            <h3>服务商</h3>

            <div id="c8e42f7716124bd2ad23c95445002d88" class="fuwishang">
              <img style="text-align: center; margin:30px 50px; margin-bottom: 10px" src="http://img.daoway.cn/img/2016/12/28/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" width="70" height="70">
              <p style="text-align: center; margin-bottom: 6px; font-weight: bold">云家政</p>
              <p class="pline"><em>已成功接单<b>26860</b></em><em style="float: right">好评<b>86%</b></em></p>
            </div>

            <div id="fba4e31f6c07416baef89bcbfbf5c910" class="fuwishang">
              <img style="text-align: center; margin:30px 50px; margin-bottom: 10px" src="http://img.daoway.cn/img/2016/08/24/94117c68-1048-473b-8370-dc40ab66c3e0_thumb.jpg" width="70" height="70">
              <p style="text-align: center; margin-bottom: 6px; font-weight: bold">三鼎家政</p>
              <p class="pline"><em>已成功接单<b>13883</b></em><em style="float: right">好评<b>84%</b></em></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <detail ref="detail" :ditProduct="ditProduct"></detail>
  </div>

</template>

<script>
  import Vue from 'vue'
  import type from './type.vue'
  import detail from './detail.vue'

    export default {
      props:['products','tpSelected'],
      data () {
        return {
          isShow: false,
          ditProduct:{}
        }
      },
      methods:{
        Show(value){
          this.isShow=!this.isShow
        },
        clickdtail(tproduct){
            this.$refs.detail.showDetail(true);
            this.$refs.type.style['display']='none';
            this.ditProduct=tproduct
          console.log('ditProduct---',this.ditProduct)

        }
      },
      computed:{
        showTypes(){
            console.log('products----',this.products)
          if(this.products){
            var result=this.products.filter((item)=>{
              return item.type==this.tpSelected
            })
            console.log('过滤所有选择的--',result)
            return result

          }

        }
      },
      components:{
        type,
        detail
      }

    }
</script>

<style>
  #type{
    position: relative;
    top:0;
    left:0;
  }
  .spm i {
    display: block;
    line-height: 42px;
    height: 42px;
  }
  .h2 {
    line-height: 85px;
    width: 1200px;
    margin: 0 auto;
    font-size: 18px;
  }
  .h2left, .h2right {
    float: left;
  }
  .h2 i {
    cursor: pointer;
  }
  .bright {
    margin: 0 10px;
    font-weight: normal;
  }
  .h2 i {
    cursor: pointer;
  }
  .cnav {
    color: #fb4e55;
  }
  .navcenter, .listdiv {
    width: 1200px;
    margin: 0 auto;
    border: 1px solid #eaeaea;
    background: #fff;
    clear: both;
  }
  .navcenter div {
    line-height: 50px;
    width: 1200px;
    overflow: hidden;
    position: relative;
  }
  .navcenter div span.fist {
    color: #a9a9a9;
  }
  .service-center {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }


  .centerleft {
    width: 970px;
    float: left;
    margin-bottom: 50px;
  }


  .navcenter div span {
    font-size: 16px;
    padding: 0 10px;
    float: left;
    cursor: pointer;
  }
  .navcenter div.list1 div:last-child {
    border: none;
  }

  .navcenter div.list1 div {
    width: 88%;
    border-bottom: 1px solid #e5e5e5;
    margin-right: 2%;
  }

  .navcenter div div:last-child {
    border-bottom: none;
  }

  .navcenter div div {
    width: 88%;
    float: right;
    padding-right: 6%;
    margin-right: 2%;
    border-bottom: 1px solid #e5e5e5;
  }

  .navcenter div {
    line-height: 50px;
    width: 1200px;
    overflow: hidden;
    position: relative;
  }
  .navcenter div div span:nth-child(1) {
    width: auto;
  }

  .navcenter div div span.clickAble {
    text-align: left;
  }

  .navcenter span.red {
    color: #e84b47;
  }
  centerleft h3, .listdiv h3 {
    width: 99%;
    height: 60px;
    line-height: 60px;
    border: 1px solid #eaeaea;
    font-weight: normal;
    font-size: 14px;
    color: #e5e5e5;
    background: #fff;
    margin: 0;
    overflow: hidden;
  }
  .paihang i.activity {
    border-bottom: 4px solid #fb474f;
    color: #fb474f;
  }

  .paihang i {
    font-size: 16px;
    margin: 0 20px;
    color: #121212;
    padding-bottom: 16px;
    cursor: pointer;
  }
  .paihang i img {
    margin-left: 5px;
  }
  .spnright {
    float: right;
    color: #121212;
  }
  .spnright i.cout {
    color: #e84b47;
  }
  .spnright i {
    font-size: 12px;
  }
  .spnright i.greycolor, .fenye2 a.greycolor {
    color: #929292;
  }

  .spnright i.pageup, .centerleft .spnright i.pagedown {
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    margin-right: 10px;
    cursor: pointer;
  }
  .centerleft .spnright i.pagedown {
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    border: 1px solid #e5e5e5;
    margin-left: 12px;
    margin-right: 10px;
    cursor: pointer;
  }
  .xianshi {
    display: block;
  }
  /*.boxtab {
    display: none;
  }*/
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
  .spm i b.oldpic em {
    text-decoration: line-through;
  }
  .spm i b em {
    font-size: 14px;
    font-style: normal;
  }
  .spm i.navtxt b {
    font-weight: normal;
    color: #929292;
    font-size: 14px;
    margin-left: 0;
    margin-right: 15px;}
  .spm i.navtxt b img {
    margin-right: 5px;
  }
  .spf {
    float: right;
    margin: 20px 60px 0 0;
  }
  .quickly {
    width: 60px;
    text-align: center;
    height: 30px;
    border: 1px solid #ff7871;
    line-height: 15px;
    font-size: 12px;
    border-radius: 6px;
    overflow: hidden;
    color: #ff7871;
    margin-left: 20px;
    position: relative;
    left: 20px;
  }
  .quickly i:nth-child(1) {
    background: #ff7871;
    color: #fff;
  }
  .quickly i {
    display: block;
    height: 15px;
  }
  .fenye, .fenye2 {
    width: 100%;
    margin: 0 auto;
    height: 152px;
    clear: both;
    text-align: center;
  }
  .fenye2 a {
    width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 0;
    font-size: 14px;
    color: #121212;
  }
  .fenye2 a.acv {
    background: #fe454a;
    color: #fff;
  }

  .fenye span.num, .fenye2 a.num {
    display: inline-block;
    width: 32px;
  }

  .centerright {
    width: 230px;
    float: right;
  }
  .rightct {
    width: 230px;
    border: 1px solid #e5e5e5;
    background: #fff;
    text-align: center;
  }
  .rightct h3 {
    font-size: 20px;
    padding-left: 10px;
    border-bottom: 1px solid #e5e5e5;
    height: 60px;
    line-height: 60px;
    margin: 0;
    text-align: left;
  }
  .fuwishang {
    height: 200px;
    background: #fff;
    cursor: pointer;
  }
  .rightct p {
    text-align: left;
    padding: 0 10px;
    line-height: 36px;
    margin-bottom: 0;
    font-size: 16px;
  }
  .rightct p.pline {
    border-bottom: 1px solid #e5e5e5;
    width: 90%;
    margin: 0 auto;
    height: 48px;
    line-height: 48px;
  }

  .rightct p.pline em {
    font-style: normal;
    font-size: 14px;
    color: #929292;
  }
  .descri{
    color: rgb(146, 146, 146);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 243px
  }


</style>
