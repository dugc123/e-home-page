<template>
 <div class="page container">
    <div class="loading" v-if="isShowLoading"><img src="../assets/Spinner-1s-90px.svg"></div>

     <div v-html="today"></div>
 </div>
</template>

<script type="text/ecmascript-6">
import getUrl from '@/utils/getNewsData'
import cheerio from "cheerio"
export default {
 data() {
 return {
     today:"",
     isShowLoading:false
 }
 },
methods: {
    getToday(){
        let date = new Date();
        let month = date.getMonth()+1;
        let day = date.getDate();
        month = month<10?"0"+month:""+month;
        day = day<10?"0"+day:""+day
        let Url = getUrl(month,day)
        this.isShowLoading = true
        this.$axios.get("/proxy/proxy.do",{url:Url}).then(res=>{
            let $ = cheerio.load(res)
            this.today = $(".p1_02").html()
            this.isShowLoading = false
        }
        ).catch(err=>{
            this.isShowLoading = false
        })
    }
},
created () {
    this.getToday()
}
}
</script>

<style  lang="scss">

</style>
<style scoped lang="scss">
 /deep/.page{
        padding:.18rem;
        // margin-top:.9rem;
        padding-top:.9rem;
        min-height:100vh;
    h1{
    font-size: 28px;
    font-weight:400;
}
h2{
    font-size: 20px;
    margin:.2rem auto;
}
p{
    font-size: 14px;
    line-height:2;
}
    }

</style>
