<style lang="less" scoped>
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
    <button @click="testData">get data</button>
    <div>{{jsonData}}</div>
  </div>
</template>
<script>
import http from 'core/http'
import url from 'core/requestUrl'
export default {
  data(){

      jsonData:null

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
