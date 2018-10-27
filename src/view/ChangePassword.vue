<template>
 <div class="page container">
    <mt-header title="修改密码" fixed>
    <router-link to="/user" slot="left" >
        <mt-button icon="back"></mt-button>
    </router-link>
    </mt-header>
     <div class="wrap">
        <div>旧密码：</div>
        <input type="password" v-model="formData.oldPwd">
        <div>新密码：</div>
        <input type="password" v-model="formData.newPwd">
        <div>确认密码：</div>
        <input type="password" v-model="formData.pwd">
        <mt-button type="danger" size="large">确定</mt-button>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
data() {
return {
    formData:{
        oldPwd:"",
        newPwd:"",
        pwd:""
    }
}
},
components: {

}
}
</script>

<style scoped lang="scss">
.wrap{
    width:6rem;
    height:6.1rem;
    font-size: 16px;
    margin:1rem auto 0;
    input{
        border-radius: 4px;
        width:5.76rem;
        height:.8rem;
        border:1px solid #ccc;
        font-size: 18px;
        padding: 0 .1rem;
        margin:.2rem 0;
    }
}
</style>
