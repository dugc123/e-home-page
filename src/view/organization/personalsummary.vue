<template>
 <div class="page container">
        <div  class="upLoad-wrap" >
            <upload @uploadSuccess="getIMGURL" :img="imgURL" @Base64="Base64"></upload>
        </div>
     <button @click="handleSubmit">提交审核</button>
 </div>
</template>

<script type="text/ecmascript-6">
import  upload from "@/components/upload-img"

export default {
data() {
return {
    imgURL:"",
    header:"",
    subList:{
        pic_list:"",
        comment_id:"",
        user_id:localStorage.token
    }
}
},
methods: {
        getIMGURL(params)
        {
        this.subList.pic_list=params;
        },
        Base64(base64)
        {
        this.imgURL=base64;
        },
        handleSubmit(){
            
            this.$axios.post(`/nationComment/submitSummary.do`,this.subList).then(res=>{
                if (res.code == 1) {
                    Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
                        this.$router.push("/LifeChoice")
                }
            })
        }
},
 components: {
    upload
 }
}
</script>

<style scoped lang="scss">
/deep/.upLoad-wrap{
    width: 2.1rem;
    height: 2.1rem;
    border:1px solid #aaa;
    margin:.2rem;
    position: relative;
    .icon-jia{
        font-size: 56px;
        position: absolute;
        color:#ccc;
        top: 50%;
        left:50%;
    }
     .IMg{
        width: 2rem;
        height: 2rem;
    }
}

button{
    position: absolute;
    left: 0;
    bottom: 1rem;
    background-color: #ef473a;
        border:none;
        height:1rem;
        width:100%;
        border-radius: 4px;
        color:#fff;
        font-size: 18px;
}
</style>

