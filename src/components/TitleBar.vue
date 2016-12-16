<template>
    <div class="header">
      <app-bar :title='title' :titleClass='titleClass' :zDepth='zDepth'>
        <icon-button icon='menu' slot='left'></icon-button>
        <icon-button icon='expand_more' slot='right'></icon-button>
      </app-bar>
    </div>
</template>
<style>
    .header{
          position: absolute;
          right: 0;
          left: 0;
          top:0;
          z-index: 10500;
          height: 49px;
          line-height: 49px;
          border-bottom: 1px solid #ddd;
      }
</style>
<script>
    import AppBar from 'muse-components/appBar'
    import IconButton from 'muse-components/iconButton'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            AppBar,
            IconButton
        },
        props:{
          title:{
            type:String,
            default:""
          },
          titleClass:{

            default:{
              'background':'#41b883'
            }
          },
          zDepth:{
            type:Number,
            default:0
          }

        }
    }
</script>
