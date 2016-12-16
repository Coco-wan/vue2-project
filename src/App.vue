<template>
  <div id="app">
    <title-bar :title='title' :titleClass='titleClass' :zDepth='zDepth'></title-bar>
    <transition :name='transitionName'>
      <router-view class='content'></router-view>
    </transition>
    <tab-bar></tab-bar>

  </div>
</template>

<script>
  import TitleBar from 'components/TitleBar'
  import TabBar from 'components/TabBar'
export default {
  name: 'app',
    data(){
      return {
        title:"mytitle",
        titleClass:{
          background:'#41b883'
        },
        zDepth:2
      }
    },
  components: {
      TitleBar,
      TabBar
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
