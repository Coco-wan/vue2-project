<template>
    <div class='footer'>
      <paper>
        <bottom-nav :value="bottomNav" shift @change="handleChange">
          <bottom-nav-item value="home" title="Home" icon="ondemand_video" />
          <bottom-nav-item value="find" title="Find" icon="music_note" />
          <bottom-nav-item value="my" title="My" icon="books" />
        </bottom-nav>
      </paper>
    </div>
</template>
<style>
  .footer{
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 50;
        height: 49px;
        text-align: center;
        border-top: 1px solid #ddd;
  }
</style>
<script>
    import Paper from 'muse-components/paper'
    import BottomNav from 'muse-components/bottomNav/bottomNav'
    import BottomNavItem from 'muse-components/bottomNav/bottomNavItem'
    export default{
        data(){
            return{
                bottomNav:'movies',
                bottomNavColor:'movies'
            }
        },
        methods:{
          handleChange(val){
            this.bottomNav = val
          },
          toPath(path){
            this.$route.push(path);
          },
          alert(){
            alert('It work');
          }
        },
        components:{
            Paper,
            BottomNav,
            BottomNavItem
        }
    }
</script>
