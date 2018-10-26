<template>
 <div class="userinfo container">
     <mt-header title="修改个人信息" fixed>
        <router-link to="/userInfo" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" @click="handleSave" >保存</mt-button>
    </mt-header>
    <div class="item-wrap">
        <div class="item">
            <span>头像</span>
        <div  class="upLoad-wrap" >
            <upload @uploadSuccess="getIMGURL" :img="imgURL" @Base64="Base64"></upload>
        </div>
        </div>
        <div class="item">
        <span>姓名</span>
        <label>
            <input type="text" v-model="userInfo.username">
        </label>
    </div>
        <div class="item">
        <span>身份证号</span>
        <span v-text="this.$store.state.userInfo.idCard" disabled></span>
    </div>
        <div class="item">
        <span>家庭住址</span>
        <input type="text" v-model="userInfo.hometown">
    </div>
        <div class="item">
        <span>工作地址</span>
        <input type="text" v-model="userInfo.address">
    </div>
        <div class="item">
        <span>民族</span>
        <input type="text" v-model="userInfo.nation">
    </div>
        <div class="item">
        <span>微信号</span>
        <input type="text" v-model="userInfo.wxNum">
    </div>
        <div class="item">
        <span>qq号</span>
        <input type="text" v-model="userInfo.qqNum">
    </div>
<div class="item">
        <span>性别</span>
        <label for="nan" class="labelOne"><input type="radio" name="sex" id="nan" v-model="userInfo.sex" value="1">男</label>
        <label for="nv"><input type="radio" name="sex" id="nv" v-model="userInfo.sex" value="0">女</label>
    </div>
        <div class="item">
        <span>最高学历</span>
        <input type="text" v-model="userInfo.education">
    </div>
        <div class="item">
        <span>职称</span>
        <input type="text" v-model="userInfo.jobRank">
    </div>
        <div class="item">
        <span>薪资水平</span>
        <input type="text" v-model="userInfo.salary">
    </div>
        <div class="item">
        <span>入党时间</span>
        <input type="text" id="test1" v-model="userInfo.joinPartyTime">
    </div>
<div class="item">
        <span>党费最后缴纳时间</span>
        <input type="text" id="test2" v-model="userInfo.lastPayTime">
    </div>
<div class="item">
        <span>当前身份</span>
        <select v-model="userInfo.partyIdentity">
            <option value="党员">党员</option>
            <option value="预备党员">预备党员</option>
            <option value="积极分子">积极分子</option>
        </select>
    </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui';
import  upload from "@/components/upload-img"
export default {

  data() {
    return {
        userInfo:{
            joinPartyTime:"",
            lastPayTime:"",
            username:"",
            hometown:"",
            address:"",
            nation:"",
            wxNum:"",
            qqNum:"",
            sex:"",
            education:"",
            jobRank:"",
            salary:"",
            partyIdentity:"",
            token:localStorage.token,
            header:""
        },
            imgURL:"",
            
        } 
 
    },
   
    methods: {
          getIMGURL(params)
          {
            this.userInfo.header=params;
          },
          Base64(base64)
          {
            this.imgURL=base64;
          },
        handleSave(){
            this.$axios.post(`/user/modifyInfo.do`,this.userInfo).then(res=>{
                if (res.code == 1) {
                this.$store.commit("CHANGE_userInfo",res.data)
                    Toast({
                        message: '修改成功',
                        position: 'middle',
                        duration: 1500
                        });
                        this.$router.push("/userInfo")
                        this.getUserInfo()
                }else{
                    Toast({
                        message: '修改失败',
                        position: 'middle',
                        duration: 1500
                        });
                }
            })
        },        
        getUserInfo(){
            this.$axios.get(`/user/userInfo.do`).then(res=>{
                if (res.code == 1) {
                    this.$store.commit("CHANGE_userInfo",res.data) 
                    this.userInfo.joinPartyTime = res.data.joinPartyTime
                    this.userInfo.lastPayTime = res.data.lastPayTime
                    this.userInfo.username = res.data.username
                    this.userInfo.hometown = res.data.hometown
                    this.userInfo.address = res.data.address
                    this.userInfo.nation = res.data.nation
                    this.userInfo.wxNum = res.data.wxNum
                    this.userInfo.qqNum = res.data.qqNum
                    this.userInfo.sex = res.data.sex
                    this.userInfo.education = res.data.education
                    this.userInfo.jobRank = res.data.jobRank
                    this.userInfo.salary = res.data.salary
                    this.userInfo.partyIdentity = res.data.partyIdentity
                    this.imgURL=res.data.header;
                }
            })
            }
    },
    created () {
        this.getUserInfo()
    }, 
    components: {
        upload
    },
    mounted () {
        laydate.render({
            elem: '#test1',
            calendar: true,
            done: (value) => {
                this.userInfo.joinPartyTime = value
            }
        })
        laydate.render({
        elem: '#test2',
        calendar: true,
        done: (value) => {
            this.userInfo.lastPayTime = value
        }
        })
    }
}
</script>

<style scoped lang="scss">
@import "../../style/userInfo.scss"
</style>
<style lang="scss" scoped>
.header-wrap{
    width:1rem;
    height: 1rem;
    border:1px solid #ccc;
    margin-top: .1rem;
}
input[type="text"]{
    border:none;
    height:.8rem;
    font-size: 16px;
    text-align: right;
    background-color: #fff;
    color: #555;
}
.labelOne{
    margin-left:5rem;
}
select{
    border:none;
}

/deep/ .IMg
    {
      width:45px;
      height:45px;
    }
</style>
