<template>
 <div class="page container">
<div class="text">
    请选择支付方式
</div>
<div class="item" @click="handleWeixin">
    <i class="iconfont icon-weixin1"></i>
    <div class="item-text">
        微信
    </div>
    <img src="../assets/right.png" class="icon-right">
</div>
<div class="item" @click="handleAlipay">
    <i class="iconfont icon-zhifubao"></i>
    <div class="item-text" >
        支付宝
    </div>
    <img src="../assets/right.png" class="icon-right">
</div>
<div class="erweima" v-show="showWeixin" @click="handleClose">
    <div class="Pay" >
        <div>微信支付</div>
        <img src="../assets/wechat.png" alt="">
    </div>
</div>
<div class="erweima" v-show="showAlipay" @click="handleClose">
    <div class="Pay" >
        <div>支付宝支付</div>
        <img src="../assets/alipay.png" alt="">
    </div>
</div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     showWeixin:false,
     showAlipay:false
 }
 },
 components: {

 },
 methods: {
    handleWeixin(){
        this.showWeixin = true
    },
    handleClose(){
        this.showWeixin = false,
        this.showAlipay = false
     },
     handleAlipay(){
        this.showAlipay = true
     }
 }
}
</script>

<style scoped lang="scss">
.text{
    margin:20px;
    font-size: 16px;
}
.item{
    display: flex;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    padding:.1rem;
    .icon-weixin1{
        font-size:.8rem;
        color:#6cc143;
        padding:.1rem;
        border-radius: .1rem;
        margin-left: .2rem;
    }
    .icon-zhifubao{
        font-size:.8rem;
        color:#1296db;
        padding:.1rem;
        border-radius: .1rem;
        margin-left: .2rem;
    }
    .item-text{
        font-size: 16px;
        margin-top: .25rem;
        margin-left:.3rem;
        width:5.34rem;
    }
    .icon-right{
            height: .34rem;
            width:.3rem;
            margin-top:.35rem;
    }
}
.erweima{
    position: fixed;
    z-index: 123;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.6);
    .Pay{
        width:6rem;
        height: 6.8rem;
        background-color: #fff;
        margin:4rem auto;
        div{
            height: .6rem;
            font-size: 20px;
            text-align: center;
            padding-top:.1rem;
        }
        img{
            width: 6rem;
            height: 6rem;
            display: block;
            }
        }
    } 

</style>
