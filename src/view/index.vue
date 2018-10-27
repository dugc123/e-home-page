<template>
 <div class="page">
    <div class="head-main">
      <div class="header-left">
        <img src="../assets/logo.png" class="header-pic">
      </div>
      <router-link to="/login" class="header-right" v-show="!this.$store.state.userInfo.idCard">
        <i class="iconfont icon-icon"></i> 登录
      </router-link>
    </div>
    <div class="slider">
        <swiper  :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <router-link :to="{name:'newsDetail',params:{id:item.url}}" class="slider-wrap">
                    <img :src="item.imgUrl">
                    <div class="desc">{{item.title}}</div>
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    <div class="main-menu">
        <div class="menu-row">
            <router-link :to="{path:'/newseye',query:{name:'0'}}">
                    <div><img src="../assets/icon_01.png" alt=""></div>
                    <div class="mennu-btn-title">信工新闻眼</div>
            </router-link>
            <router-link to="/life">
                    <div><img src="../assets/icon_03.png" alt=""></div>
                    <div class="mennu-btn-title">掌上组织生活</div>
            </router-link>
            <router-link to="/interaction">
                    <div><img src="../assets/icon_05.png" alt=""></div>
                    <div class="mennu-btn-title">党员云互动</div>
            </router-link>
        </div>
        <div class="menu-row">
            <router-link :to="{path:'/oneclick',query:{name:'3'}}">
                    <div><img src="../assets/icon_04.png" alt=""></div>
                    <div class="mennu-btn-title">党建一点通</div>
            </router-link>
            <router-link :to="{path:'/showidentity',query:{name:'5'}}">
                    <div><img src="../assets/icon_06.png" alt=""></div>
                    <div class="mennu-btn-title">党员亮身份</div>
            </router-link>
            <router-link to="/today">
                    <div><img src="../assets/icon_02.png" alt=""></div>
                    <div class="mennu-btn-title">党史的今天</div>
            </router-link>
        </div>
    </div>

    <div class="banner">
        <img src="../assets/banner02.png" alt="">
    </div>
    <div class="footer-menu">
        <div class="menu-left">

        </div>
        <div class="menu-right">
            <div class="row">
                <router-link :to="{path:'/anytimestudy',query:{name:'6'}}"></router-link>
                <router-link to="/anytimephoto"></router-link>
            </div>
            <div class="row">
                <router-link :to="{path:'/System',query:{name:'4'}}"></router-link>
                <router-link :to="{path:'/activity',query:{name:'1'}}"></router-link>
            </div>
        </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {

 data() {
 return {
    swiperOption:{
            pagination: '.swiper-pagination',
            loop:true,
            autoplay: 3000
        },
        swiperList:[],
        isShowLogin:true
 }
 },
methods: {
    getSwiper(){
        let Info = {...this.$store.state.userInfo}
        if (Info) {
            this.isShowLogin = false
        }else{
            this.isShowLogin = true
        }
        this.$axios.get(`/carousel/carouselList.do?type=0`).then(res=>{
            if (res.code == 1) {
                this.swiperList = res.rows
            }
        })
    },

},
mounted () {
    this.getSwiper()
}
}
</script>

<style scoped lang="scss">
@import '../style/index.scss';
</style>
