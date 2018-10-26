<template>
 <div class="discuss container">
     <div class="firctr">
        <p class="title">评议须知</p>
        <div class="content">
            <div>在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</div>
            <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
            <p>2、参加“两学一做”学习教育情况；</p>
            <p>3、参加党的组织生活、按要求交纳党费；</p>
            <p>4、学习情况、业务能力提高情况；</p>
            <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
            <p>6、联系群众、关心群众、服务群众情况；</p>
            <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
        </div>
     </div>
     <div class="choice">
        <select name="" id="">
            <option value="item" >请选择</option>
            <option value="item" v-for="item in findAll" :key="item.id">{{item.branch}}</option>
        </select>
        <button>下一步</button>
     </div>

 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    findAll:[]
 }
 },
methods: {
    getFindAll(){
        this.$axios.get('/branch/findAll.do').then(res=>{
            if (res.code == 1) {
                this.findAll = res.rows             
            }
        })
    }
},
mounted () {
    this.getFindAll()
}
}
</script>

<style scoped lang="scss">
.firctr{
    margin-top: .5rem;
    .title{
    text-align: center;
    font-size: 16px;
    margin-bottom: .2rem;
}
.content{
    font-size: 14px;
    color:#555;
    margin: 0 .18rem;
    p{
        line-height: 2;
       
    }
     p:first-of-type{
         margin-top: .2rem;
     }
}
}
.choice{
    margin-top: 2rem;
    select{
    height:.8rem;
    border-radius: 4px;
    background-color: #c50206;
    color: #fff;
    border: none;
    width: 3rem;
    padding-left: .3rem;
    margin-left: .8rem;
    option{
        background-color: #fff;
        color:#333;
    }
}
 button{
        background-color: #c50206;
        border:none;
        height:.8rem;
        width:1.875rem;
        border-radius: 4px;
        color:#fff;
        font-size: 18px;
        margin-right:.8rem;
        float: right;
        margin-top: .54rem;
    }
}

</style>
