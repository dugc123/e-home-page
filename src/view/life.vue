<template>
<div class="life">
    <div class="life-wrap">
        <img src="../assets/timg.jpg" alt="">
        <div class="icon-img">
            <div class="icon-img-row">
                <router-link :to="{path:'/anytimestudy/8',query:{name:'8'}}">
                    <div><img src="../assets/icon1.png" alt=""></div>
                    <div>政治学习</div>
                </router-link>
                <router-link to="/">
                    <div><img src="../assets/icon2.png" alt=""></div>
                    <div>思想汇报</div>
                </router-link>
                <router-link to="/">
                    <div><img src="../assets/icon3.png" alt=""></div>
                    <div>心得总结</div>
                </router-link>
            </div>
            <div class="icon-img-row">
                <router-link to="/LifeChoice">
                    <div><img src="../assets/icon4.png" alt=""></div>
                    <div>民主评议 </div>
                </router-link>
                <router-link to="/findorg">
                    <div><img src="../assets/icon5.png" alt=""></div>
                    <div>流动党员找组织</div>
                </router-link>
            </div>
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
.life{
    padding-top:.89rem;
    .life-wrap{
        img{
            display: block;
            width:100%;
            height:100%;
        }
    }
    .icon-img{
        box-sizing: border-box;
        -webkit-background-size: 100%;
        background-size: 100%;
        background-position: center;
        height:6.24rem;
        .icon-img-row{
                a{
                    display: block;
                    float: left;
                    text-align: center;
                    font-size: 16px;
                    color:#666;
                    width: 33.33%;
                img{
                    width:1.7rem;
                    height:1.7rem;
                    margin:0 auto;    
                    padding: 15px 20px;
                }
                }
        }
    }
}
</style>
