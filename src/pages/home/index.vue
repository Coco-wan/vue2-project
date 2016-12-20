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
    <v-header :title='title'></v-header>
    <v-content>
      <v-hello></v-hello>
    </v-content>
  </div>
</template>
<script>
  export default{
    methods:{

    },
    data(){
      return {
        title:'Home'
      }
    }
  }
</script>
