<template>
<div>
  <!--商家入驻-->
  <div  style="width: 100%; height: 300px; background: url(../img/information.jpg)  no-repeat center center">
    <img style="width: 100%; height: 300px"src="../img/information.jpg" alt="">
  </div>
  <div class="info-one">
    <div class="one-center">
      <img src="../img/information1.jpg"  alt="" width="166" height="166">
      <div>
        <b>1.“互联网+”很美，但获取用户太贵？</b>
        <p>到位平台累计用户量接近1000万，完全开放，供入驻商家免费共享</p>
      </div>
    </div>
  </div>
  <div class="info-two">
    <div class="two-center">
      <div>
        <b>2、服务只覆盖少数地区，打广告太浪费？</b>
        <p>按商家的服务区域定向展示，精准提升品牌，轻松获取高质量订单</p>
      </div>
      <img src="../img/information2.jpg"  alt="" width="166" height="166">

    </div>
  </div>
  <div class="info-one">
    <div class="one-center">
      <img src="../img/information3.jpg"  alt="" width="166" height="166">
      <div>
        <b>3、服务太低频，用户留存低、回头太难？</b>
        <p>团结就是力量，低频+低频=高频，多种上门服务互推，回头客不难</p>
      </div>
    </div>
  </div>
  <div class="info-two">
    <div class="two-center">
      <div>
        <b>4、渠道太分散，各种渠道推广费时费力？</b>
        <p>入驻平台即加入“到位服务联盟”，直接让上数百个渠道帮您推广</p>
      </div>
      <img src="../img/information4.jpg"  alt="" width="166" height="166">

    </div>
  </div>
  <div class="info-one">
    <div class="one-center">
      <img src="../img/information5.jpg"  alt="" width="166" height="166">
      <div>
        <b>5、技术投入大、运营成本高、利润太低？</b>
        <p>到位免费提供完善的O2O管理平台，无需技术投入，节约大量成本</p>
      </div>
    </div>
  </div>

  <div class="cooperation">提交<i>合作</i>信息</div>
  <div class="cooperation-center">
    <div class="tanme"><i><em>*</em>公司名称：</i><div><input id="companyName" type="text" maxlength="30" placeholder="填写公司名称"></div></div>
    <div class="ched tanme" style="clear: both"><i><em>*</em>服务项目：</i>
      <b id="bb" style="position: relative; right: 15px">
        <input type="checkbox" id="1" value="家庭保洁"><label for="1">家庭保洁</label>
        <input type="checkbox" id="2" value="上门按摩"><label for="2">上门按摩</label>
        <input type="checkbox" id="3" value="维修"><label for="3">维修</label>
        <input type="checkbox" id="4" value="家电清洗"><label for="4">家电清洗</label>
        <input type="checkbox" id="5" value="洗衣洗鞋"><label for="5">洗衣洗鞋</label>
        <input type="checkbox" id="6" title="保姆月嫂"><label for="6">保姆月嫂</label><br>
        <input type="checkbox" style="margin-left: 120px" id="7" value="搬家"><label for="7">搬家</label>
        <input type="checkbox" id="8" style="margin-left: 28px" value="上门养车"><label for="8">上门养车</label>
        <input type="checkbox" id="9" value="鲜花"><label for="9">鲜花</label>
        <input type="checkbox" id="10" value="美容美体"><label for="10">美容美体</label>
        <input style="width: 120px; height: 22px; line-height: 22px" type="text" id="note"><label for="note">其它</label>
      </b>
    </div>
    <div class="tanme"><i><em>*</em>联系电话：</i><div><input id="contactPhone" type="text" maxlength="11" placeholder="填写联系电话"></div></div>
    <div class="tanme"><i><em>*</em>联系人：</i><div><input id="contactName" type="text" placeholder="填写联系人"></div></div>
    <div class="tanme"><i><em>*</em>服务覆盖城市：</i><div><input id="serviceCity" type="text" placeholder="填写覆盖城市"></div></div>
    <div class="tanme"><i><em>*</em>日接单能力：</i><div><input id="dayOrders" type="text" placeholder="填写日接单能力（请填写数字不能有汉字）"></div></div>
    <div class="tanme"><i>APP/公众账号：</i><div><input id="apporoffieceid" type="text" placeholder="填写APP/公众账号"></div></div>
    <div class="tanme"><i>公司网址：</i><div><input id="companyHref" type="text" placeholder="填写公司网址"></div></div>
    <button class="tbtn" onclick="submit()">提交商户信息</button>
    <p style="color: #898989; text-align: center; margin-top: 20px">招商电话：010-64522010 （工作时间：周一至周五 9:00 - 18:00 法定假日除外）</p>
    <!--<p style="color: #fb474f"><a style="color: #fb474f; text-decoration: underline; margin-right: 6px" href="http://www.daoway.com/dian/#/regist" target="_blank">自助注册开店</a>》</p>-->
  </div>
  <!---->
</div>
</template>

<script>
    export default {


    }
</script>

<style>
  .info-one{
    width:100%;
    height:300px;
  }
  .one-center{
    width:1200px;
    height:300px;
    margin:0 auto
  }
  .one-center div {
    float: right;
    line-height: 60px;
    padding-top: 100px;
    margin-right: 150px;
  }
  .one-center img{
    margin:60px
  }
  .one-center b{
    margin-top:100px;
    font-size: 32px;
  }

  .one-center p{
    font-size: 22px;
    margin-left: 55px;
  }


  .info-two{
    width:100%;
    height:300px;
  }
  .two-center{
    width:1200px;
    margin:0 auto
  }
  .two-center div {
    line-height: 60px;
    padding-top: 90px;
    float: left;
  }
  .two-center img{
    float: right;
    margin-right:60px
  }
  .two-center b{
    margin-top:100px;
    font-size: 32px;
  }

  .one-center p{
    font-size: 22px;
    margin-left: 55px;
  }

  .two-center img {
    float: right;
    margin: 60px;
  }

  .cooperation {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 110px;
  }
  .cooperation i {
    color: #fb474f;
  }
  .cooperation-center {
    padding-top: 20px;
  }
  .cooperation-center {
    width: 660px;
    margin: 0 auto 50px;
    text-align: center;
  }

  .tanme {
    line-height: 46px;
    height: 46px;
  }
  .cooperation-center div i {
    width: 120px;
    text-align: right;
    float: left;
    display: block;
  }
  .cooperation-center div em {
    color: red;
    margin-right: 5px;
  }
  .cooperation-center div div {
    float: left;
  }
  .cooperation-center div input[type=text], .cooperation-center div input[type=tel] {
    width: 500px;
    padding-left: 15px;
    height: 30px;
    line-height: 30px;
    border-radius: 6px;
    border: 1px solid #d1d1d1;
    margin-left: 10px;
  }
  .tbtn {
    width: 126px;
    background: #fb474f;
    height: 36px;
    line-height: 36px;
    color: #fff;
    border-radius: 6px;
    border: none;
    margin-top: 30px;
  }
  .ched {
    line-height: 40px;
    height: 88px;
  }
  .ched b input {
    margin-right: 2px;
  }
</style>
