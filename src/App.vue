<template>
  <div id="app">
    <!--<title-bar :title='title' :titleClass='titleClass' :zDepth='zDepth'></title-bar>-->
      <transition :name='transitionName'>
        <router-view></router-view>
      </transition>
    <!--<v-footer></v-footer>-->
    <tab-bar v-if='showFooter'></tab-bar>
  </div>
</template>

<script>
  import TabBar from 'utils/TabBar'
export default {
  name: 'app',
    data(){
      return {
      transitionName:"slide-left",
        showFooter:true
      }
    },
  components: {
      TabBar,

  },
  methods:{
    showTabBar(){
      let routeArray = this.$route.fullPath.split('/');
      if(routeArray.length > 2){
        this.showFooter = false
      }
    },
    alertR(){
      console.log("route has change");
    }
  },
  watch:{
    $route:'showTabBar'
  },
}

</script>

<style lang='less' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  overflow: auto;
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 50px;
  left: 0;
  z-index: 100;
  -webkit-overflow-scrolling : touch;
}

</style>
