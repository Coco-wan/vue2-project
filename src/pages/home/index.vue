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
    <hello></hello>
  </div>
</template>
<script>
  import Hello from 'components/Hello'

  export default{
    components:{
      Hello,

    },
  }
</script>
