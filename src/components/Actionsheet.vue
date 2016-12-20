<template>
    <div>
      <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                sheetVisible:false,
                actions:[{name:'拍照',method:this.takePhoto},
          {name:'从相册中选择',method:this.openAlbum}]
            }
        },
        methods:{
          takePhoto(){
            console.log("take photo");
          },
          openAlbum(){
            console.log("open album")
          }
        },
        mounted:{

        }
    }
</script>
