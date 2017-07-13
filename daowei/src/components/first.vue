<template>
<div id="first">
 <div id="first-top" ref="firstTop">
   <div class="full_banner">
     <!--轮播-->
     <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
       <!-- Indicators -->
       <ol class="carousel-indicators">
         <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
         <li data-target="#carousel-example-generic" data-slide-to="1"></li>
         <li data-target="#carousel-example-generic" data-slide-to="2"></li>
       </ol>
       <div class="carousel-inner" role="listbox">
         <div class="item active">
           <img src="../img/banner1.jpg" alt="">
         </div>
         <div class="item">
           <img src="../img/banner2.jpg" alt="">
         </div>
         <div class="item">
           <img src="../img/banner3.jpg" alt="">
         </div>
       </div>
       <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
         <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
         <span class="sr-only">1</span>
       </a>
       <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
         <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
         <span class="sr-only">2</span>
       </a>
     </div>
     <!--列表-->
     <div class="banner-nav">
       <div id="banner-list">
         <ul>
           <li class="navname" style="position: relative" v-for="product in servyProducts">
             <a
             style="position: absolute;display: block; width: 100%; height: 100%; top: 0; left: 0" href="/fuwu?category=20"
             target="_blank"></a><i>{{product.serviceName}}</i>
             <img src="../img/right.png" width="6" height="11" class="">
             <ul style="top: 0px; display: none" v-for="">

               <li  @click="typeclick(product.servyItems,p)"
                    v-for="(p,i) in product.serviceType.split('/')"
                   >
                 <a href="javascript:;">{{p}}</a></li>


             </ul>

           </li>

         </ul>
       </div>
     </div>
     <type ></type>
   </div>




   <div class="box1" v-for="product in servyProducts">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">{{product.serviceName}}</span><span class="serviceType">{{product.serviceType}}</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=20" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="javascript:;" @click="clickdtail(item)" v-for="item in product.servyItems">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder">
                 <img :src="item.serviceImg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">{{item.name}}</div>
                 <div class="description" v-text="item.description.split('<br>').join(' ')"></div>
                 <div class="price"><span style="font-size: 20px">{{item.price}}</span>元/小时<span class="btn">查看详情</span></div>
               </div>
             </a>


           </div>
         </div>
       </div>
     </div>
   </div>
<!--
   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">上门按摩</span><span class="serviceType">中医推拿/油压SPA/局部理疗/足疗套餐/美体塑形/母婴保健</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader">
          <span class="lookMore">
            <a href="/fuwu?category=22" style="color: #898989; font-size: 18px">更多服务&gt;</a>
          </span>
           </div>
           <div class="row">
             <a class="form-group shopList" href="/detail?detailId=2434418&amp;CNtag=%E4%B8%8A%E9%97%A8%E6%8C%89%E6%91%A9">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/08/30/cce534a8-1360-487b-8e18-c404b9b71319_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">招牌Massage</div>
                 <div class="description">时长：90分钟
                   服务姿势：卧姿

                   适用介绍：
                   适用于工作繁忙...</div>
                 <div class="price"><span style="font-size: 20px">135</span>元/次<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2434418&amp;CNtag=%E4%B8%8A%E9%97%A8%E6%8C%89%E6%91%A9">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/08/30/cce534a8-1360-487b-8e18-c404b9b71319_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">招牌Massage</div>
                 <div class="description">时长：90分钟
                   服务姿势：卧姿

                   适用介绍：
                   适用于工作繁忙...</div>
                 <div class="price"><span style="font-size: 20px">135</span>元/次<span class="btn">查看详情</span></div>
               </div>
             </a>

           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">上门维修</span><span class="serviceType">手机维修/家电维修/电脑维修/家庭维修/管道疏通/开锁换锁/安装打孔/空气净化</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=36" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=81919&amp;CNtag=%E4%B8%8A%E9%97%A8%E7%BB%B4%E4%BF%AE">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2015/09/07/8d8cc9b6-c968-47ff-b294-73d292d1e69c_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">空调维修</div>
                 <div class="description">此项目价格仅为上门检测费

                   服务内容：
                   1.空调维修、加氟、...</div>
                 <div class="price"><span style="font-size: 20px">30</span>元/台<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=81919&amp;CNtag=%E4%B8%8A%E9%97%A8%E7%BB%B4%E4%BF%AE">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2015/09/07/8d8cc9b6-c968-47ff-b294-73d292d1e69c_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">空调维修</div>
                 <div class="description">此项目价格仅为上门检测费

                   服务内容：
                   1.空调维修、加氟、...</div>
                 <div class="price"><span style="font-size: 20px">30</span>元/台<span class="btn">查看详情</span></div>
               </div>
             </a>

           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">家电清洗</span><span class="serviceType">空调清洗/油烟机清洗/洗衣机清洗/冰箱清洗/燃气灶清洗/热水器清洗/微波炉清洗/饮水机清洗</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=21" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=2396850&amp;CNtag=%E5%AE%B6%E7%94%B5%E6%B8%85%E6%B4%97">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/price/2017/05/26/d90b3c02-2a4e-4b18-b82b-9cfc7d43947f_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">挂壁式空调清洗</div>
                 <div class="description">我们是TCL集团旗下家电服务品牌
                   服务流程：
                   1.验机
                   2....</div>
                 <div class="price"><span style="font-size: 20px">60</span>元/台<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2396850&amp;CNtag=%E5%AE%B6%E7%94%B5%E6%B8%85%E6%B4%97">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/price/2017/05/26/d90b3c02-2a4e-4b18-b82b-9cfc7d43947f_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">挂壁式空调清洗</div>
                 <div class="description">我们是TCL集团旗下家电服务品牌
                   服务流程：
                   1.验机
                   2....</div>
                 <div class="price"><span style="font-size: 20px">60</span>元/台<span class="btn">查看详情</span></div>
               </div>
             </a>

           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">衣物洗护</span><span class="serviceType">洗衣/洗鞋修鞋/家纺清洗/箱包洗护/定制改衣</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=26" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">
             <a class="form-group shopList" href="/detail?detailId=2432124&amp;CNtag=%E8%A1%A3%E7%89%A9%E6%B4%97%E6%8A%A4">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/08/20/91180dee-868e-410f-a7de-df0149ce4d11_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">手包清洗保养护理</div>
                 <div class="description">服务内容：
                   包包内外污渍清洗，去霉杀菌上光处理（不含补色补伤...</div>
                 <div class="price"><span style="font-size: 20px">128</span>元/个<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2432124&amp;CNtag=%E8%A1%A3%E7%89%A9%E6%B4%97%E6%8A%A4">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/08/20/91180dee-868e-410f-a7de-df0149ce4d11_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">手包清洗保养护理</div>
                 <div class="description">服务内容：
                   包包内外污渍清洗，去霉杀菌上光处理（不含补色补伤...</div>
                 <div class="price"><span style="font-size: 20px">128</span>元/个<span class="btn">查看详情</span></div>
               </div>
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">搬家速运</span><span class="serviceType">搬家租车/拆装搬运/搬家套餐/仓储寄存</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=35" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=2459652&amp;CNtag=%E6%90%AC%E5%AE%B6%E9%80%9F%E8%BF%90">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/23/612403f7-0b6f-4bbf-801b-e5ad6935660e_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">厢货搬家</div>
                 <div class="description">服务内容：
                   1.厢货车辆容积：4.2米*1.9米*1.9米=...</div>
                 <div class="price"><span style="font-size: 20px">348</span>元/次<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2459652&amp;CNtag=%E6%90%AC%E5%AE%B6%E9%80%9F%E8%BF%90">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/23/612403f7-0b6f-4bbf-801b-e5ad6935660e_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">厢货搬家</div>
                 <div class="description">服务内容：
                   1.厢货车辆容积：4.2米*1.9米*1.9米=...</div>
                 <div class="price"><span style="font-size: 20px">348</span>元/次<span class="btn">查看详情</span></div>
               </div>
             </a>

           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">美容美妆</span><span class="serviceType">化妆/美甲/美睫/美容/美发/半永久</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=110" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=2489411&amp;CNtag=%E7%BE%8E%E5%AE%B9%E7%BE%8E%E5%A6%86">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/price/2017/06/23/78a2dc09-d1d4-4a4e-a56c-c62d94cbd909_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">尊享私人定制精油SPA</div>
                 <div class="description">服务时长：60分钟
                   适用介绍：女士专享
                   部位任选：按摩部位任...</div>
                 <div class="price"><span style="font-size: 20px">238</span>元/项<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2489411&amp;CNtag=%E7%BE%8E%E5%AE%B9%E7%BE%8E%E5%A6%86">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/price/2017/06/23/78a2dc09-d1d4-4a4e-a56c-c62d94cbd909_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">尊享私人定制精油SPA</div>
                 <div class="description">服务时长：60分钟
                   适用介绍：女士专享
                   部位任选：按摩部位任...</div>
                 <div class="price"><span style="font-size: 20px">238</span>元/项<span class="btn">查看详情</span></div>
               </div>
             </a>


           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">鲜花绿植</span><span class="serviceType">包月鲜花/礼品用花/绿植</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=50" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=2489640&amp;CNtag=%E9%B2%9C%E8%8A%B1%E7%BB%BF%E6%A4%8D">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/price/2017/06/09/f1ed7345-faae-49fe-8066-183390a79254_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">宝塔竹 白色自吸水塑料花盆</div>
                 <div class="description">1.本商品为带盆栽好,白色自吸水塑料花盆，盆高11cm，盆外...</div>
                 <div class="price"><span style="font-size: 20px">1</span>元/份<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2489640&amp;CNtag=%E9%B2%9C%E8%8A%B1%E7%BB%BF%E6%A4%8D">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/price/2017/06/09/f1ed7345-faae-49fe-8066-183390a79254_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">宝塔竹 白色自吸水塑料花盆</div>
                 <div class="description">1.本商品为带盆栽好,白色自吸水塑料花盆，盆高11cm，盆外...</div>
                 <div class="price"><span style="font-size: 20px">1</span>元/份<span class="btn">查看详情</span></div>
               </div>
             </a>



           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">上门医护</span><span class="serviceType">护士上门/挂号陪诊/康复陪护/私人医生</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=120" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=2463124&amp;CNtag=%E4%B8%8A%E9%97%A8%E5%8C%BB%E6%8A%A4">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/01/12/ae76cec7-343e-4556-9d8c-f4a614dd5d81_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">天天护（标准）</div>
                 <div class="description">服务简介：
                   满足医院或者居家的短期护理需求，主要包括住院期护...</div>
                 <div class="price"><span style="font-size: 20px">180</span>元/天<span class="btn">查看详情</span></div>
               </div>
             </a>

             <a class="form-group shopList" href="/detail?detailId=2467969&amp;CNtag=%E4%B8%8A%E9%97%A8%E5%8C%BB%E6%8A%A4">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2017/03/01/c74ac864-a9f3-4db5-8807-c4628ef28341_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">美白针（高级）</div>
                 <div class="description">产品介绍：
                   美白针，主要通过静脉输液的方式达到全身美白效果。...</div>
                 <div class="price"><span style="font-size: 20px">298</span>元/项<span class="btn">查看详情</span></div>
               </div>
             </a>


           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="box1">
     <div class="fff">
       <div class="servicebody">
         <div class="navigation"><span class="serviceIndex">养车用车</span><span class="serviceType">上门养车/上门洗车/汽车陪练/机场泊车/验车</span>
         </div>
         <div class="servicetags">
           <div class="tagsListHeader"><span class="lookMore"><a href="/fuwu?category=60" style="color: #898989; font-size: 18px">更多服务&gt;</a></span>
           </div>
           <div class="row">

             <a class="form-group shopList" href="/detail?detailId=2431614&amp;CNtag=%E5%85%BB%E8%BD%A6%E7%94%A8%E8%BD%A6">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/12/21/a8d154f1-aac0-42d4-aff1-e2bc7f56bdc8_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">中小型自动档单约课程</div>
                 <div class="description">培训车型：
                   速腾、思域、悦动、朗逸、宝来、朗动、马六、408...</div>
                 <div class="price"><span style="font-size: 20px">110</span>元/小时<span class="btn">查看详情</span></div>
               </div>
             </a>
             <a class="form-group shopList" href="/detail?detailId=2431614&amp;CNtag=%E5%85%BB%E8%BD%A6%E7%94%A8%E8%BD%A6">
               <div class="col-md-3 col-xs-6 member-container ServiceBorder"><img src="http://img.daoway.cn/img/2016/12/21/a8d154f1-aac0-42d4-aff1-e2bc7f56bdc8_thumb.jpg" class="serviceImg" width="210px" height="210px">
                 <div class="serviceName">中小型自动档单约课程</div>
                 <div class="description">培训车型：
                   速腾、思域、悦动、朗逸、宝来、朗动、马六、408...</div>
                 <div class="price"><span style="font-size: 20px">110</span>元/小时<span class="btn">查看详情</span></div>
               </div>
             </a>

           </div>
         </div>
       </div>
     </div>
   </div>-->
 </div>
  <type ref="type" :products="selectTypes" :tpSelected="tpSelected"></type>
  <detail ref="detail" :ditProduct="fdiProduct"></detail>
</div>
</template>
<script src="../../static/js/jquery-1.12.4.js"></script>
<script src="../../static/js/bootstrap.js"></script>
<script  type="text/javascript">

</script>
<script>
  import Vue from 'vue'
  import type from './type.vue'
  import detail from './detail.vue'
    export default {
      props: {
        servyProducts:Array
      },
      data(){
          return {
              selectTypes:[],
              tpSelected:"全部",
              fdiProduct:{}
          }
      },
      methods:{
          typeclick (value,tp) {
            this.$refs.type.Show(true);
            this.$refs.firstTop.style['display']='none'
            this.selectTypes=value
            this.tpSelected=tp


          },
         clickdtail(fdi){
          this.$refs.detail.showDetail(true);
          this.$refs.firstTop.style['display']='none';
          this.fdiProduct=fdi
           console.log('first----datail---', this.ditProduct)

        }
      },
        components:{
            type,
          detail
        }
    }

</script>

<style>
  /*#first{
    position:relative;
  }*/
  /*bannner lunbo*/
  .carousel-inner itm img{
    width:100%
  }
  .full_banner {
    width:1920px;
    position: relative;
    background: #FFF;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }

  /*banner list*/

  #banner-list{
    width: 180px;
    position: absolute;
    top:0;
    left:30px;
    background-color: #ccc;
    height:100%;
  }
  .banner-nav ul {
    width: 180px;
    background: #757881;
    height: 420px;
    margin-top: 2px;
  }
  .banner-nav ul ul {
    position: absolute;
    left: 180px;
    top: 0;
    background: rgba(255,255,255,0.7);
    width: 160px;
    margin-top: 0;
  }

  .banner-nav ul li {
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
    position: relative;
    font-weight: bold;
    cursor: pointer;
    padding-left: 45px;
  }
  .banner-nav ul li a{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .banner-nav ul li i {
    display: inline-block;
    width: 90px;
    font-size: 20px;
    text-align: justify;
    text-align-last: justify;
  }
  .banner-nav ul li img {
    position: absolute;
    right: 18px;
    top: 15px;
  }

  /*box*/
  .box1 {
    height: 560px;
    width: 100%;
  }
  .box1:nth-child(odd) {
    background: #fff;
  }
  .box1 {
    height: 560px;
    width: 100%;
  }
  .fff {
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    clear: both;
  }
  .navigation {
    text-align: center;
  }
  .navigation span.serviceIndex {
    color: #3d3838;
    font-weight: 800;
    font-size: 28px;
    font-family: "Microsoft YaHei";
  }

  .navigation span {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-family: "幼圆";
  }

  .tagsListHeader {
    text-align: right;
  }
  .lookMore {
    position: relative;
    bottom: 10px;
  }
  .lookMore a {
    color: #898989;
    font-size: 18px;
    font-family: "幼圆";
  }

  .row {
    margin-top: 10px;
    margin-left: 0;
    margin-right: 0;
  }
  .ServiceBorder {
    float: left;
    padding: 10px;
    width: 230px;
    border: 1px solid #eaeaea;
    margin: 0 5px;
    background: #fff;
    cursor: pointer;
    height: 345px;
  }
  .serviceType {
    font-size: 22px;
    color: #3d3838;
    margin-top: 15px;
  }
  .shopList .serviceName {
    font-size: 16px;
    padding: 10px 0;
    font-weight: 800;
    color: #000;
    height: 30px;
    overflow: hidden;
    width: 101%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .shopList .description {
    color: #929292;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 13px;
    line-height: 26px;
    height: 58px;
  }
  .shopList .price {
    font-size: 14px;
    padding: 5px 5px;
    font-weight: 600;
    height: 20px;
    line-height: 20px;
    color: #fb474f;
  }


  .banner-nav .navname li a{
    color: #121212;
    text-decoration: none;
    border:none
  }
 /**/
  .banner-nav .navname li a{color: #121212}
  .banner-nav .navname li a:hover{color: #e94840}

  .navname ul li{
  text-align: center;
  font-size: 20px;
  }

  .banner-nav ul li .act {
    position: absolute;
    right: 18px;
    top: 15px;
    z-index: 100;
  }
  .btn{
    float: right;
    padding: 0;
    width: 76px;
    height: 24px;
    line-height: 22px;
    text-align: center;
    background: #fb474f;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
  }

</style>
