<template>
 <div class="page">
     <mt-header :title="title" fixed>
        <router-link to="/" slot="left">
            <mt-button icon="back" @click="handleClick"></mt-button>
        </router-link>
     </mt-header>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 methods: {
    handleClick(){
        this.$router.back()
    }
 },
 computed: {
    title(){
        return this.$route.meta.title
    }

 }
}
</script>

<style lang="scss">
.mint-header{
    background-color: #c50206;
    height: 0.9rem;
    .mint-header-title{
        font-size: 18px;
    }
}
</style>
