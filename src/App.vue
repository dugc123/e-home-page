<template>
  <div id="app">
    <router-view/>
    <com-header v-if="ShowHeader"></com-header>
    <tabs v-if="!isShowTabs"></tabs>
  </div>
</template>

<script>
import tabs from "@/components/tabs.vue"
import ComHeader from "./components/com-header"

export default {
  name: 'App',
  components:{
    tabs,
    ComHeader

  },
  computed: {
    isShowTabs(){
      if (this.$route.name == "index" ||this.$route.name == "know"||this.$route.name == "user") {
        return false
      }else{
        return true
      }
    },
    ShowHeader(){
       if (this.$route.name == "user" ||this.$route.name=="newsDetail"
       ||this.$route.name == "know"||this.$route.name == "userinfo"||this.$route.name == "updateInfo") {
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<style>
@import "./style/init.css"

</style>
<style>
*{
  touch-action: none;
}
.container{
  padding-top:.9rem;
  
}
.clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
  .fll {
    float: left;
  }
  .flr{
    float: right;
  }
    .loading{
    position: fixed;
    top: .8rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 998;
  }
.bottom-text{
    text-align: center;
   height:.8rem;
   line-height: .8rem;
}
</style>
