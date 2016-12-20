<style lang="less" scoped>
</style>
<template>
  <div>
    <v-header :title='title'></v-header>
    <v-content>
      <v-swiper></v-swiper>
      <mt-button type="danger" @click='openAlert("这是一个alert提示框")'>alert</mt-button>
      <mt-button type="default" @click='openConfirm()'>confirm</mt-button>
      <mt-cell title="标题文字"></mt-cell>
    </v-content>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
  export default{
    components:{
      },
      methods:{
        openAlert(content){
          MessageBox.alert(content,'提示');
        },
        openConfirm(){
          MessageBox.confirm('你确定要这样做吗？','提示').then(()=>this.openAlert('您选择了确定'),
          () => this.openAlert('您选择了取消'));
        }
      },
      data(){
        return {
          title:'find'
        }
      }

  }

</script>
