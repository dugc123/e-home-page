<template>
    <div class="tabs">
    <router-link to="/" class="tabs-item" :class="{active:$route.name ==='index'}">
        <i class="iconfont icon-dangwugongkai"></i>
        <div>首页</div>
    </router-link>
    <router-link to="/know" class="tabs-item" :class="{active:$route.name ==='know'}">
        <i class="iconfont icon-xiazai16"></i>
        <div>通知早知道</div>
    </router-link>
    <router-link to="/user" class="tabs-item" :class="{active:$route.name ==='user'}">
        <i class="iconfont icon-icon-pro"></i>
        <div>我的党建</div>
    </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
.tabs{
    height: 1.12rem;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #fafbfe;
    a{
        color:#667
    }
    .tabs-item{
        flex: 1;
        text-align: center;
        font-size: 12px;
        .iconfont{
            font-size: 24px;
        }
    }
    .active{
        border-top: 2px solid #c7000a;
        color:#c7000a
    }
}
</style>
