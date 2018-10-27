<template>
 <div class="detail">
    <div class="loading" v-if="isShowLoading"><img src="../../static/Spinner-1s-90px.svg"></div>
          <mt-header :title="title" fixed>
        <router-link to="#" slot="left">
            <mt-button icon="back" @click="handleIcon"></mt-button>
        </router-link>
    </mt-header>
    <h3>{{detailList.title}}</h3>
    <div class="content">
        <p v-html="detailList.content"></p>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
        title:"",
        detailList:{},
        isShowLoading:false
 }
 },
methods: {
    getDetail(){
        const id = this.$route.params.id
        // console.log(id)
        this.isShowLoading = true
        this.$axios.get(`/news/newsContent.do`,{newsId:id}).then(res=>{
            if (res.code == 1) {
                this.detailList = res.data
                this.isShowLoading = false
                switch(res.data.type){
                    case 0:
                        this.title = '信工新闻眼'
                        break;
                    case 1:
                        this.title = '特色活动';
                        break;
                    case 2:
                        this.title = '通知早知道';
                        break;
                    case 3:
                        this.title = '党建一点通';
                        break;
                    case 4:
                        this.title = '制度建设';
                        break;
                    case 5:
                        this.title = '党员亮身份';
                        break;
                    case 6:
                        this.title = '随时随地学';
                        break;
                    case 7:
                        this.title = '随时随地拍';
                        break;
                    case 8:
                        this.title = '政治学习';
                        break;
                    default:
                        break;
                }
            }
        }).catch(err=>{
                this.isShowLoading = false
        })
    },
    handleIcon(){
        this.$router.back()
    }
},
mounted () {
    this.getDetail()
}
}
</script>

<style scoped lang="scss">
/deep/.detail{
    padding:1rem .1rem;
    h3{
        font-size: 22px;
        }
         p{
    width: 7.1rem;
    font-size: 14px;
    color:#333;
    line-height:1.8;
    img{
        width: 100%;
        margin:.4rem 0 .4rem .1rem;
    }
}
    } 
</style>
