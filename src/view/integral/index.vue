<template>
<div class="page container">
    <div class="wrap">
        {{this.$store.state.userInfo.totalScore}}
    </div>
    <div class="jifen">
        <img src="../../assets/积分明细icon.png" class="icon-left">
        <router-link to="/integralDetail">积分明细</router-link>
        <img src="../../assets/right.png" class="icon-right">
    </div>
    <div class="guize">
        积分规则
        <img src="../../assets/wenhao.png" >
    </div>
   <div class="integral">
       <div class="left-text">
           登录APP
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           完善个人信息
       </div>
       <div class="right-integral">
           2
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           查看积分
       </div>
       <div class="right-integral">
           1
       </div>
   </div>
     <div class="integral">
       <div class="left-text">
           按时缴纳党费
       </div>
       <div class="right-integral">
           10
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           查看通知
       </div>
       <div class="right-integral">
           2
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           了解学院工作动态
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
          上交思想汇报经审核通过
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           主动学习相关文件
       </div>
       <div class="right-integral">
           10
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           认真撰写心得总结并上交，经审核通过
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           提交个人总结，并参与评议
       </div>
       <div class="right-integral">
           2
       </div>
   </div>
    <div class="integral">
       <div class="left-text">
           积极参与互动
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
      <div class="integral">
       <div class="left-text">
           学习党建知识
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
      <div class="integral">
       <div class="left-text">
           学习党史
       </div>
       <div class="right-integral">
           10
       </div>
   </div>
      <div class="integral">
       <div class="left-text">
           创先争优事迹
       </div>
       <div class="right-integral">
           10
       </div>
   </div>
      <div class="integral">
       <div class="left-text">
           学党章，学习近平总书记系列讲话
       </div>
       <div class="right-integral">
           10
       </div>
   </div>
      <div class="integral">
       <div class="left-text">
           用镜头记录两学一做过程中令人感动的人和事
       </div>
       <div class="right-integral">
           3
       </div>
   </div>
     <div class="integral">
       <div class="left-text">
           关注并积极参与特色活动
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
     <div class="integral">
       <div class="left-text">
           制度化、常态化建设
       </div>
       <div class="right-integral">
           5
       </div>
   </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.wrap{
    height:2.8912rem;
    line-height:2.8912rem;
    text-align: center;
    background: url("../../assets/jifen.png") no-repeat;
    background-size:100%;
    color:#fff;
    font-size: 16px;
    margin-top:-.1rem;
}
.jifen{
    height:1.08rem;
    line-height: 1.08rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    margin-top: .1rem;
    display: flex;
    a{
        font-size: 18px;
        padding-right:4.7rem;
        color:#555;
    }
    .icon-left{
        width:.64rem;
        height:.64rem;
       margin: .2rem;
      
    }
    .icon-right{
          width:.24rem;
        height:.24rem;
        margin-top: .4rem;
         
    }
}
 .guize{
        height:.68rem;
        line-height: .68rem;
        font-size: 14px;
        padding:0 .2rem;
        background-color: #eee;
        img{
            float: right;
            margin-top:.2rem;
        }
    }
    .integral{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color:#666;
        height: .68rem;
        line-height: .68rem;
        border-top:1px solid #ccc;
        // border-top:1px solid #ccc;
        padding:0 .2rem;
        .right-integral{
            color:#f00;
        }
    }
</style>
