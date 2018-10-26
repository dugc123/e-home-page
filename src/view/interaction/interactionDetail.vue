<template>
 <div class="interaction container">
    <div class="loading" v-if="isShowLoading"><img src="../../assets/Spinner-1s-90px.svg"></div>
     <div class="item clearfix" ref="wrapper">
                <div class="top">
                    <img :src="userData.header">
                    <div class="nickname">
                        {{userData.username}}
                    </div>
                    <div class="time">
                        <i class="iconfont icon-shijian"></i>
                        <span>{{userData.currentTime}}</span>
                    </div>
                </div>
                <div class="contents">
                    {{userData.content}}
                </div>
            </div>
        <div  v-for="item in forumCommentList" :key="item.id">
            <div class="items clearfix" ref="wrapper">
                <div class="top">
                    <img :src="item.header">
                    <div class="nickname">
                        {{item.username}}
                    </div>
                    <div class="time">
                        <i class="iconfont icon-shijian"></i>
                        <span>{{item.timeFormat}}</span>
                    </div>
                </div>
                <div class="contents">
                    {{item.comment}}
                </div>
            </div>
        </div>
        <div  v-if="commentList.timeFormat">
            <div class="item clearfix">
                <div class="top">
                    <img :src="commentList.header">
                    <div class="nickname">
                        {{commentList.username}}
                    </div>
                    <div class="time">
                        <i class="iconfont icon-shijian"></i>
                        <span>{{commentList.timeFormat}}</span>
                    </div>
                </div>
                <div class="contents">
                    {{commentList.comment}}
                </div>
            </div>
        </div>
    <div class="bottom-text">没有更多数据了</div>
    <div class="comment">
        <input type="text" placeholder="评论内容"  v-model="commentList.comment"> 
        <button @click="handleComment">评论</button>
    </div>

 </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    props:["content"],
    data() {
    return {
        page: 1,
        isShow:true,
        isShowLoading:false,
        userData:{},
        forumCommentList:[],
        formData:{
            page:1,
            rows:100,
            forum_id:''
        },
        commentList:{
            comment:"",
            forum_id:"",
            timeFormat:"",
            header:""
    }
    }
    },
 methods: {
           getuserData(){
            this.userData = this.$route.query
            // console.log(this.userData)
        },
    getData(){
       this.formData.forum_id = this.userData.forumId
            this.$axios.get('/forum/forumCommentList.do',this.formData).then(res=>{
                // console.log(res)
                this.forumCommentList = res.rows
            })
    },
    handleComment(){
        this.commentList.forum_id = this.userData.forumId
        this.$axios.post(`forum/addComment.do`,this.commentList).then(res=>{
            if (res.code == 1) {
                this.commentList.comment = ''
                this.getData()
                Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
            }else{
                Toast({
                        message: res.msg,
                        position: 'middle',
                        duration: 1500
                        });
            }
        })
    }
 },
 mounted() {
     this.getuserData()
     this.getData()
 }
}
</script>

<style scoped lang="scss">
.interaction{
      overflow: scroll;
    font-size: 14px;
    min-height: 100vh;
    background-color: #eee;
  .item {
    margin: 0 auto;
    background-color: #fff;
    width: 7.14rem;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 16px;
    color: #333;
    border-bottom: .2rem solid #eee;
  }
   .contents {
      padding: 0.2rem 0;
      font-size: 16px;
    }
    .comment{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        width: 100%;
        height: 1rem;
            input{
        width:78%;
        padding: 0 .2rem;
        height: .6rem;
        margin-top: .2rem;
        margin-left: .1rem;
        line-height: .6rem;
        border:1px solid #f00;
    }
    button{
        height: .6rem;
        background-color: #f00;
        border:none;
        color:#fff;
        margin-left: .1rem;
        border-radius: .1rem;
    }
    }
    .items{
        background-color: #fff;
        width: 100%;
        margin-top: 0.2rem;
        box-sizing: border-box;
        padding: 16px;
        color: #333;
        border-bottom: .2rem solid #eee;
    }
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
      .time {
        font-size: 12px;
        margin-left: 1rem;
        padding-top: 0.6rem;
      }
    }
}
</style>
