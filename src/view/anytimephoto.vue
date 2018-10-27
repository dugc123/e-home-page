<template>
<div class="page container">
        <router-link :to="{name:'newsDetail',params:{id:item.newsId}}" v-for="item in PhotoList" :key="item.newsId">
            <img :src="item.pic">
            <div>{{item.title}}</div>
        </router-link>
</div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     PhotoList:[]
 }
 },
 methods:{
     getPhoto(){
    this.$axios.get(`/news/newsList.do`,{page:1,rows:10,type:7}).then(res=>{
        if (res.code == 1) {
            this.PhotoList = res.rows
        }
    })
}
 }
,mounted () {
    this.getPhoto()
}
}
</script>

<style scoped lang="scss">

    a{
        display: inline-block;
        padding:.31rem;
        font-size: .26rem;
        width:3.1rem;
        color:#555;
        img{
            width:3.1rem;
            height:2.8rem;
        }
        div{
        
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        }
    }

</style>
