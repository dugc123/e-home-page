<template>
 <div class="page container">
     <div class="zhidao-header">
         <div>通知早知道</div>
     </div>
    <div class="loading" v-if="isShowLoading"><img src="../assets/Spinner-1s-90px.svg"></div>
     <router-link class="news-wrap" :to="{name:'newsDetail',params:{id:item.newsId}}" v-for="item in zhidaoList" :key="item.newsId">
         <img src="../assets/iconfont_gonggaotongzhi.png">
         <div class="news-wrap-text">
            <div class="title">
                {{item.title}}
            </div>
            <div class="time">
                {{item.currentTime}}
            </div>
         </div>
     </router-link>
     <div class="not-date" v-if="!isShowLoading">没有更多数据了</div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
data() {
return {
    zhidaoList:[],
    isShowLoading:false
}
},
methods: {
    getZhidaoList(){
        this.isShowLoading = true
        this.$axios.get(`/news/newsList.do`,{page:1,rows:10,type:2}).then(res=>{
            if (res.code == 1) {
                this.zhidaoList = res.rows
                // console.log(this.zhidaoList)
                this.isShowLoading = false
            }
        }).catch(err=>{
            this.isShowLoading = false
        })
    }
},
mounted () {
    this.getZhidaoList()
}
}
</script>

<style scoped lang="scss">
.zhidao-header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    background-color: #c50206;
    text-align: center;
    color:#fff;
    font-size: 18px;
    height: 0.9rem;
    line-height: .9rem;
}
 .loading{
    position: fixed;
    top: .8rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 998;
  }
.news-wrap{
    display: flex;
    border-bottom:1px solid #eee;
    width:7.1rem;
    padding: 10px;
    margin:0 auto;
    img{
        padding: .1rem;
        height:.74rem;
        width:.7rem;
        display: block;
        // margin-right: .3rem;
    }
    .news-wrap-text{
        width:5.48rem;
        .title{
        font-size: 16px;
        color:#233;
        }
        .time{
            font-size: 12px;
            // margin-top: .2rem;
            color:#555;
        }
    }
   
}
.not-date{
    color:#555;
    font-size: 14px;
    text-align: center;
    padding-top:.18rem;
}
</style>
