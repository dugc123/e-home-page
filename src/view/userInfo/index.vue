<template>
 <div class="userinfo">
    <mt-header title="个人信息" fixed>
    <router-link to="/user" slot="left" >
        <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button slot="right" @click="handleEdit" >编辑</mt-button>
    </mt-header>
<div class="item-wrap-1">
    <div class="item">
        <span>头像</span>
        <img :src="Info.header">
    </div>
<div class="item">
        <span>姓名</span>
        <span>{{Info.username}}</span>
    </div>
        <div class="item">
        <span>身份证号</span>
        <span>{{Info.idCard}}</span>
    </div>
        <div class="item">
        <span>家庭住址</span>
        <span>{{Info.hometown}}</span>
    </div>
        <div class="item">
        <span>工作地址</span>
        <span>{{Info.address}}</span>
    </div>
        <div class="item">
        <span>民族</span>
        <span>{{Info.nation}}</span>
    </div>
        <div class="item">
        <span>微信号</span>
        <span>{{Info.wxNum}}</span>
    </div>
        <div class="item">
        <span>qq号</span>
        <span>{{Info.qqNum}}</span>
    </div>
<div class="item">
        <span >性别</span>
        <span>{{Info.sex}}</span>
    </div>
        <div class="item">
        <span>最高学历</span>
        <span>{{Info.education}}</span>
    </div>
        <div class="item">
        <span>职称</span>
        <span>{{Info.jobRank}}</span>
    </div>
        <div class="item">
        <span>薪资水平</span>
        <span>{{Info.salary}}</span>
    </div>
        <div class="item">
        <span>入党时间</span>
        <span>{{Info.joinPartyTime}}</span>
    </div>
<div class="item">
        <span>党费最后缴纳时间</span>
        <span>{{Info.lastPayTime}}</span>
    </div>
<div class="item">
        <span>当前身份</span>
        <span>{{Info.partyIdentity}}</span>
    </div>
</div>

</div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
    return {
        Info:{}
    }
    },
    methods: {
        getUserInfo(){
        this.$axios.get(`/user/userInfo.do`).then(res=>{
            if (res.code == 1) {
                this.Info = res.data
                console.log(this.Info)
                
                this.$store.commit("CHANGE_userInfo",res.data) 
                if (this.Info.sex == 1) {
                    this.Info.sex = "男"
                }else if(this.Info == 0){
                    this.Info.sex = "女"
                }
            }
        })
        },
        handleEdit(){
            this.$router.push("/updateInfo")
        }
    },
    created () {
        this.getUserInfo()
    }
}
</script>

<style scoped lang="scss">
@import "../../style/userInfo.scss"

</style>
