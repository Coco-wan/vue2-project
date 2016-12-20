<template>
    <div>
      <mt-tabbar fixed v-model="selected">
        <mt-tab-item id="tab1" @click='toPath("./home")'>
          <img slot="icon" >
          home
        </mt-tab-item>
        <mt-tab-item id="tab2" @click='toPath("./find")'>
          <img slot="icon">
          find
        </mt-tab-item>
        <mt-tab-item id="tab3" @click='toPath("./my")'>
          <img slot="icon" >
          my
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<style>
     .footer{
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 50;
        height: 49px;
        text-align: center;
        border-top: 1px solid #ddd;
  }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue',
                selected:'tab1'
            }
        },
        components:{
        },
        methods:{
          toPath(name){
            this.$router.push(path)
          }
        }
    }
</script>
