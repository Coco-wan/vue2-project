<style lang="less" scoped>
  @import "../../styles/common";
  .about {
    padding: 10px;
    line-height: 22px;
    dt {
      line-height: 28px;
      font-weight: bold;
    }
  }
</style>
<template>
  <div>
    <v-header :title='title'></v-header>
    <v-content>
      <button @click="testData">get data</button>
      <ul class="am-list am-list-static am-list-border">
        <router-link :to='{name:"info",params:{name:name}}'>
          <li>go to info page</li>
        </router-link>
      </ul>
    </v-content>
    <!--<v-actionsheet></v-actionsheet>-->
  </div>
</template>
<script>
import http from 'core/http'
import url from 'core/requestUrl'
export default {
  data(){
    return{
      jsonData:null,
      title:'My',
      name:'june'
    }

  },
  methods:{
    testData(){
      http.httpGet(this,url.getPostData,(response) => this.successCallBack(response),
      (response) => this.failCallBack(response)
      )
    },
    successCallBack(response){
      this.$set('jsonData',JSON.stringify(response.body.data.num))
    },
    failCallBack(response){
      console.log(response)
    }
  },

}

</script>
