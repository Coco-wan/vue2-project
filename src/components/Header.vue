<template>
  <div class="header">
      <mt-header :title="title" class='title'>
          <mt-button icon="back" slot='left' v-if='canBack' @click='back'></mt-button>
          <!--<mt-button @click="handleClose">x</mt-button>-->
        <mt-button @click='onRightIconClick' :icon="more" slot="right" v-if='hasRightIcon'>{{rightContent}}</mt-button>
      </mt-header>
  </div>
</template>
<style lang='less' scoped>
  .header{
    position: absolute;
          right: 0;
          left: 0;
          top:0;
          z-index: 10500;
          height: 49px;
          line-height: 49px;
          border-bottom: 1px solid #ddd;
        .title{
          height: 49px;
        }
     }
</style>
<script>
    export default{
        props:{
          canBack:{
            type:Boolean,
            default:false
          },
          title:{
            type:String,
            default:"my-title"
          },
           rightIcon:{
            type:String,
            default:'more'
           },
           hasRightIcon:{
            type:Boolean,
            default:false
           },
           rightContent:{
            type:String,
            default:""
           },
           onRightIconClick:{
            //refer to a function
            default:null
           }
        },
        methods:{
          back(){
            this.$router.go(-1);
          }
        }
    }

</script>
