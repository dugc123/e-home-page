<template>
<div class="container main-body">
    <div class="loading" v-if="isShowLoading"><img src="../../static/Spinner-1s-90px.svg"></div>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
        <div class="newlist"  ref="wrapper">
            <router-link :to="{name:'newsDetail',params:{id:item.newsId}}"  v-for="(item,index) in newsList" :key="index">
            <div class="newseye-wrap">
                <div class="img-wrap">
                    <img :src="item.pic">
                </div>
                <div class="text-wrap">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="time">
                        <span>{{item.currentTime}}</span> 
                        <span class="iconfont"><i class="iconfont icon-eye"></i>{{item.count}}</span> 
                    </div>
                </div>
            </div>
    </router-link>
    </div>
    </mt-loadmore>
    <div class="bottom-text" v-show="!isShow">没有更多数据了</div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
data() {
return {
    newsList:[],
    //可以进行上拉
    allLoaded: false,
    //是否自动触发上拉函数
    isAutoFill: false,
    wrapperHeight: 0,
    page: 1,
    isShow:true,
    isShowLoading:false
}
},
methods: {
     //   下拉刷新
    loadTop() {
      this.loadFrist();
    },
    // 上拉加载
    loadBottom() {
      this.loadMore();
    },
        getNewsList(){
        let type = this.$route.query.name
        this.isShowLoading = true
        this.$axios.get(`/news/newsList.do?page=1&rows=10&type=${type}`).then(res=>{
        if (res.code == 1) {
            this.isShowLoading = false
            this.newsList = res.rows
        }
    }).catch(err=>{
        this.isShowLoading = false
    })
    },
     // 下拉刷新加载
    loadFrist() {
        let type = this.$route.query.name
      this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=${type}`)
        .then(res => {
            if (res.code == 1 && res.total >= 10) {
                this.page = 1;
                this.allLoaded = false; // 可以进行上拉
                this.newsList = res.rows
                this.$refs.loadmore.onTopLoaded();
            }
        }).catch(error => {
          console.log(error)
        });
    },
        // 加载更多
    loadMore() {
        let type = this.$route.query.name 
        this.page++;
        this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=${type}`)
        .then(res => {
            // concat数组的追加
            this.newsList = this.newsList.concat(res.rows);
            if (res.rows.length < 10) {
                this.allLoaded = true; // 若数据已全部获取完毕
                this.isShow = false
            }
            this.$refs.loadmore.onBottomLoaded();
        })
    }
},
mounted () {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
    document.documentElement.clientHeight -
    this.$refs.wrapper.getBoundingClientRect().top;
},
  created() {
    this.getNewsList()
    this.loadFrist()
    
  },
}
</script>

<style scoped lang="scss">
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
  font-size: 14px;
}
.newlist{
    min-height:100vh;
    .newseye-wrap{
    height:1.7rem;
    display: flex;
    padding-bottom: 1.8rem;
    border-bottom: 1px solid #ccc;
    position: relative;
    .img-wrap{
        img{
            height:1.6rem;
            width:1.6rem;
            display: block;
            padding: .1rem;
        }
    }
    .text-wrap{
        padding-top:.1rem;
        width:5.3rem;
        .title{
            font-size: 16px;
            color:#333;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:2;
            overflow: hidden;
        }
        .time{
            font-size: 12px;
            margin-top:.3rem;
            color:#555;
            position: absolute;
            bottom: .2rem;
            left: 1.8rem;
            .iconfont{
                margin-left: .9rem;
                margin-right:.1rem;
                font-size: 14px;
            }
        }
    }
}
}

</style>
<style>

</style>
