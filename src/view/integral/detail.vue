<template>
 <div class="main-body container" ref="wrapper">
    <div class="loading" v-if="isShowLoading"><img src="../../assets/Spinner-1s-90px.svg"></div>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
     <div class="item" v-for="(item,index) in detailLst" :key="index">
        <div class="item-top">
           <span class="typeName">{{item.typeName}}</span> 
           <span class="singleDesc">+{{item.singleDesc}}</span>
        </div>
        <div class="item-title">
            {{item.timeFormat}}
        </div>

     </div>
    </mt-loadmore>
     
    <div class="bottom-text" v-show="isShow">没有更多数据了</div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
    detailLst:[],
    isShow:false,
    isShowLoading:false,
    //可以进行上拉
    allLoaded: false,
    //是否自动触发上拉函数
    isAutoFill: false,
    wrapperHeight: 0,
    page: 1,
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
        // 下拉刷新加载
        loadFrist() {
        this.isShowLoading = true
        this.$axios.get(`/integral/integralList.do`,{page:1,rows:10}).then(res => {
            this.page = 1;
            this.allLoaded = false; // 可以进行上拉
            this.detailLst = res.rows
            this.isShowLoading = false
            this.$refs.loadmore.onTopLoaded();
            }).catch(error => {
            console.log(error);
            this.isShowLoading = false;
        });
    },
        // 加载更多
    loadMore() {
        this.page++;
        this.$axios.get(`/integral/integralList.do`,{page:this.page,rows:10})
        .then(res => {
            // concat数组的追加
            this.detailLst = this.detailLst.concat(res.rows);
            if (res.rows.length < 10) {
                this.allLoaded = true; // 若数据已全部获取完毕
                this.isShow = true
            }
            this.$refs.loadmore.onBottomLoaded();
        })
    }
},
created () {
    this.loadFrist()
},
mounted () {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
    document.documentElement.clientHeight -
    this.$refs.wrapper.getBoundingClientRect().top;
}
}
</script>

<style scoped lang="scss">
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
    overflow: scroll;
    font-size: 14px;
}
.item{
    margin-top: -.1rem;
    border:1px solid #ddd;
    color:#444;
    font-size: 16px;
    padding:.32rem;
    box-sizing: border-box;
    .item-top{
        .typeName{
            font-size:18px;
            color:#333;
        }
        .singleDesc{
            color:#f00;
            float: right;
        }
    }
}
</style>
