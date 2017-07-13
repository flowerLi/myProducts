<template>
    <div>
      <!--内容-->
      <h2 class="h2">服务商</h2>
      <div class="service-center">
        <!--服务-->
        <div class="centerleft">
          <div class="tabdiv">
            <ul class="ulactivety">
              <li id="###">
                <img src="http://img.daoway.cn/../img/2017/01/20/c3a2490e-04fc-43de-9a05-8a62dce47f57_thumb.jpg" alt="">
                <p style="margin-top: 15px">
                  <img style="margin-bottom: 5px" src="../img/home1.png" width="18" height="17">
                  <b>宜生到家</b>
                </p>
                <p class="pp">已接单11910单<i>好评98%</i></p>
              </li>
            </ul>
          </div>
          <div id="getServiceList" serviceitemlength="20" class="fenye" style="display: block;">
      <span>查看更多商家
        <img style="margin-left: 5px" src="../img/fuwu_down2.jpg" width="12" height="7">
      </span>
          </div>
          <div></div>
        </div>

        <!--加盟-->
        <div id="jiameng" class="centerright">
          <img src="../img/tuijianfuwushang_03.jpg"
               width="230px" height="auto" alt="">
          <div class="erweima">
            <img src="../img/daowayApp.png" width="130px"
                 height="auto" alt="">
          </div>
        </div>
      </div>

      <!---->
    </div>
</template>

<script>

    export default {}
</script>

<style>
  .h2 {
    line-height: 85px;
    width: 1200px;
    margin: 0 auto;
    font-size: 18px;
  }
  .centerleft {
    width: 970px;
    float: left;
    margin-bottom: 50px;
  }
  .service-center {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  .tabdiv ul.ulactivety {
    display: block;
  }
  .centerleft ul li {
    width: 232px;
    height: 300px;
    border: 1px solid #eaeaea;
    padding: 10px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    background: #fff;
    cursor: pointer;
  }
  .centerleft ul p {
    height: 26px;
    line-height: 26px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .centerleft ul p img {
    margin-right: 6px;
  }
  .centerleft ul p b {
    font-size: 16px;
    margin-left: 0.1rem;
  }
  .centerleft p.pp {
    font-size: 12px;
    color: #929292;
  }
  .centerleft ul p {
    height: 26px;
    line-height: 26px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .centerleft p.pp i {
    float: right;
  }



  .fenye, .fenye2 {
    width: 100%;
    margin: 0 auto;
    height: 152px;
    clear: both;
    text-align: center;
  }
  .fenye span, .fenye2 a {
    width: 200px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin: 50px 5px;
    background: #fff;
    display: inline-block;
    font-size: 16px;
    color: #b1b1b1;
    cursor: pointer;
  }
  .centerright {
    width: 230px;
    float: right;
  }

  .erweima {
    width: 230px;
    height: 290px;
    background: url(../img/tuijianfuwushang_06.jpg) no-repeat center;
    margin-top: 10px;
  }
  .erweima img {
    margin: 50px 0 0 50px;
  }
</style>
