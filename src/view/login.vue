<template>
 <div class="container login">
    <div class="login-wrap">
        <div class="logo-wrap">
            <img src="../assets/logo.png" alt="">
        </div>
    </div>
    <form class="form" @submit.prevent>
        <div class="input-wrap">
            <input type="text" placeholder="身份证号" v-model="formData.id_card">
        </div>
        <div class="input-wrap">
            <input type="password" placeholder="密码" v-model="formData.password" @keydown.enter.native="handleLogin" >
        </div>
        <div class="input-wrap">
            <mt-button size="large" @click="handleLogin">登录</mt-button>
        </div>
        
    </form>
 </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
 data() {
    return {
        formData:{
            id_card:"",
            password:""
        }
    }
    },
    methods: {
        handleLogin(){
                Indicator.open({
                    text: '登录中...',
                    spinnerType: 'snake'
                    });
                this.$axios.post("/user/userLogin.do",this.formData).then(res=>{
                if (res.code == 1) {
                    Indicator.close();
                    this.$store.commit("CHANGE_userInfo",res.data) 
                    localStorage.setItem("token",res.token) 
                    if(this.$route.query.redirect){
                        //     let redirect = decodeURIComponent(this.$route.query.redirect);
                            let redirect = this.$route.query.redirect;
                            this.$router.push(redirect);
                        }else{
                            this.$router.push('/');
                        }
                    Toast({
                        message: '登录成功',
                        position: 'middle',
                        duration: 1500
                        });
                }else{
                    Indicator.close();
                    Toast({
                        message: '用户名或密码不正确',
                        position: 'middle',
                        duration: 1500
                        });
            }
        }).catch(err=>{
                    Indicator.close();
        })
            
    }
    }
}
</script>
<style>
.mint-button{
    background-color: #e43228;
    font-size: 14px;
    color: #fff;
    margin:0 auto;
}
    ::-webkit-input-placeholder { 
        color: #fff;
    }


</style>

<style scoped lang="scss">
@import "../style/login.scss"
</style>
