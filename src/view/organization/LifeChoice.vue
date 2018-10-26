<template>
 <div class="page container">
     <div class="button-wrap">
         <router-link to="/personalsummary">
             <button>个人总结</button>
         </router-link>
            <router-link to="/discuss">
                 <button> 民主评议</button>
            </router-link>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
import { Button } from 'mint-ui';
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
.button-wrap{
    width: 100%;
    height: 3.08rem;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%)
}
    button{
        background-color: #ef473a;
        border:none;
        height:1rem;
        width:3.95rem;
        border-radius: 4px;
        color:#fff;
        font-size: 18px;
        margin-left: 1.75rem;
    }
</style>
