<template>
 <div class="interaction container">
    <div class="loading" v-if="isShowLoading"><img src="../../assets/Spinner-1s-90px.svg"></div>
        <mt-loadmore  :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
        <div  v-for="item in ForumList" :key="item.id">
            <div class="item clearfix" ref="wrapper">
                <div class="top">
                    <img :src="item.header">
                    <div class="nickname">
                            {{item.username}}
                    </div>
                    <div class="text-flr flr">
                            党员互动
                    </div>
                    <div class="time">
                        <i class="iconfont icon-shijian"></i>
                        <span>{{item.currentTime}}</span>
                        <i class="iconfont icon-laba"></i>
                        <span>公开</span>
                    </div>
                </div>
                <div class="contents">
                    {{item.content}}
                </div>
                <router-link class="response flr" 
                :to="{name:'interactionDetail',query:{content:item.content,currentTime:item.currentTime,forumId:item.forumId,header:item.header,username:item.username}}">
                        <i class="iconfont icon-xiazai16"></i> 
                        <span>回复</span>           
                </router-link>
            </div>
        </div>
    </mt-loadmore>
    <div class="bottom-text" v-show="!isShow">没有更多数据了</div>
    <i class="iconfont icon-xinzeng2" @click="handleIcon"></i>
    <div class="form-item" v-show="isShowForm"  @click="handleClose">
        <form  @click="stopProp" >
            <textarea v-model="form.content" ></textarea>
            <button class="sure" @click.prevent="handleSave">发布</button>
            <button class="close"  @click.prevent="handleClose">取消</button>
        </form>
    </div>

 </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
        ForumList:[],
    //可以进行上拉
    allLoaded: false,
    //是否自动触发上拉函数
    isAutoFill: false,
    wrapperHeight: 0,
    page: 1,
    isShow:true,
    isShowLoading:false,
    isShowForm:false,
    form:{
        type: 1,
        content:""
    },
    
    };
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
        getForumList(){
        this.isShowLoading = true
        this.$axios.get(`/forum/forumList.do?page=1&rows=10&type=0&cates=0`).then(res=>{
        if (res.code == 1) {
            this.isShowLoading = false
            this.ForumList = res.rows
        }
    }).catch(err=>{
        this.isShowLoading = false
    })
    },
     // 下拉刷新加载
    loadFrist() {
      this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=10&type=0&cates=0`)
        .then(res => {
            if (res.code == 1 && res.total >= 10) {
                this.page = 1;
                // this.allLoaded = false; // 可以进行上拉
                this.ForumList = res.rows
                this.$refs.loadmore.onTopLoaded();
            }
        }).catch(error => {
          console.log(error);
        });
    },
        // 加载更多
    loadMore() {
        this.page++;
        this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=10&type=0&cates=0`)
        .then(res => {
            // concat数组的追加
            this.ForumList = this.ForumList.concat(res.rows);
            if (res.rows.length < 10) {
                this.ForumList = true; // 若数据已全部获取完毕
                this.isShow = false
            }
            this.$refs.loadmore.onBottomLoaded();
        })
    },
    handleIcon(){
        this.isShowForm = true
    },
    handleClose(){
        this.isShowForm = false
    },
    handleSave(){
        this.$axios.post(`/forum/saveForum.do`,this.form).then(res=>{
            if (res.code == 1) {
                 Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
                        this.getForumList()
                        this.isShowForm = false
            }else{
                 Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
            }
        })
    },
    stopProp(e) {
            e=e||event;
            e.stopPropagation()
            e.preventDefult
        },
},
mounted () {
    this.getForumList()
    this.loadFrist()
}
};
</script>

<style scoped lang="scss">
.interaction {
    overflow: scroll;
    font-size: 14px;
    min-height: 100vh;
    background-color: #eee;
  .item {
    margin: 0 auto;
    background-color: #fff;
    // height: auto;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    padding: 16px;
    color: #333;
    border-bottom: .2rem solid #eee;
    .top {
      img {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
        float: left;
      }
      .nickname {
        font-size: 18px;
        margin-left: 0.2rem;
        float: left;
      }
      .text-flr {
        font-size: 12px;
        padding: 2px 8px;
        color: red;
        width: 1.32rem;
        height: 0.52rem;
        border: 1px solid red;
        border-radius: 15%/50%;
      }
      .time {
        font-size: 12px;
        margin-left: 1rem;
        padding-top: 0.6rem;
      }
    }
  }
   .contents {
      padding: 0.2rem 0;
      font-size: 16px;
    }
    .response{
        font-size: 14px;
        color:#333;
    }
    .icon-xinzeng2{
        color:#f00;
        font-size: 56px;
        position: fixed;
        right:.2rem;
        bottom: 1rem
    }
    .form-item{
            position: fixed;
            z-index: 123;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,.6);
        form{
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #eee;
        textarea{
            width: 7.1rem;
            min-height: 2rem;
            margin:0 auto;
            border:none;
            padding:4px;
            margin-top: .1rem;
            margin-left: .1rem;
            color:#000;
            font-size: 16px;
        }
        button{
            border:none;
            border-radius: 4px;
            padding: 2px 4px 1px;
            min-width: .56rem;
            min-height: .6rem;
            font-size: 12px;
            line-height: 26px;
            margin:.1rem .1rem;
        }
        .sure{
            background-color: #ef473a;
            color:#fff;
        }
        .close{
            background-color: #fff;
            float: right;
        }
    }
  
    }
}
</style>
