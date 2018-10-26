<template>
 <div class="user">
     <div class="user-header">
         <div>我的党建</div>
     </div>
    <div class="user-wrap">
            <div class="user-img">
                <img :src="this.$store.state.userInfo.header" v-if='this.$store.state.userInfo.idCard'>
                <img src="../assets/bt_bg.png" v-else>
            </div>
            <router-link to="/login">
            <div class="user-login"  v-if="!this.$store.state.userInfo.idCard">
                您还没有登录，请先登录
            </div>
            <div class="user-login"  v-else>
               {{this.$store.state.userInfo.username}}
            </div>
        </router-link>
    </div> 
    <router-link to="/userinfo">
        <div class="user-info">
            <img class="user-info-img" src="../assets/icon_05.png">
            <div>个人信息</div>
            <img class="user-info-img-right" src="../assets/right.png">
        </div>
    </router-link>
        <router-link to="/integral">
        <div class="user-info">
            <img class="user-info-img" src="../assets/icon_01.png">
            <div>个人量化积分</div>
            <img class="user-info-img-right" src="../assets/right.png">
        </div>
    </router-link>
        <router-link to="/ChangePassword">
        <div class="user-info">
            <img class="user-info-img" src="../assets/xgmm.png">
            <div>修改密码</div>
            <img class="user-info-img-right" src="../assets/right.png">
        </div>
    </router-link>
        <router-link to="/pay">
        <div class="user-info">
            <img class="user-info-img" src="../assets/icon3.png">
            <div>党费缴纳</div>
            <img class="user-info-img-right" src="../assets/right.png">
        </div>
    </router-link>
            <mt-button class="logout" type="danger" v-if="this.$store.state.userInfo.idCard" @click="handleLogout">退出登录</mt-button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
 }
 },
 methods: {
    handleLogout(){
                this.$store.commit("CHANGE_userInfo","")   
                localStorage.setItem("token","")   
                this.$router.push("/login")

    }
 },
 created () {
 }
}
</script>

<style scoped lang="scss">
.user-header{
    background-color: #c50206;
    text-align: center;
    color:#fff;
    font-size: 18px;
    height: 0.9rem;
    line-height: .9rem;
}
.user-wrap{
    position: relative;
    height: 2.8125rem;
    margin-top: -0.1rem;
    background-color: #c50206;
    .user-img img{
        border-radius: 50%;
        height: 1.25rem;
        width: 1.25rem;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .user-login{
        font-size: 12px;
        text-align: center;
        color:#fff;
        position: absolute;
        top:78%;
        left:50%;
        transform: translateX(-50%)
    }
    }
    .user-info{
        height:1.08rem;
        line-height: 1.08rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        .user-info-img{
            height:.64rem;
            width:.64rem;
            margin-left:11px;
            display: block;
            margin-top:.22rem;
        }
        div{
            font-size: 16px;
            padding-left:.2rem;
            padding-right:1.08rem;
            width: 6.14rem;
            font-size: 16px;
            color:#555;
        }
        .user-info-img-right{
            height: .24rem;
            width:.15344rem;
            margin-top: .4rem;
        }
    }
    .logout{
        margin-top:.2rem;
        width:7.1rem;
        margin-left:.2rem;
    }
</style>
