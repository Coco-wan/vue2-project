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
    <v-content>
      <v-hello></v-hello>
      <button @click='alertThis()'>click me </button>
    </v-content>
  </div>
</template>
<script>
  export default{
    methods:{
      alertThis(){
        console.log(this.$http);
      }
    }
  }
</script>
