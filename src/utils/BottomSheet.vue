<template>
    <div>
        <raised-button @click='openBottomSheet' label='open bottom sheet'></raised-button>
        <bottom-sheet :open='bottomSheet' @close='closeBottomSheet'>
          <mu-list @itemClick='closeBottomSheet'>
            <sub-header>choose one</sub-header>
            <mu-list-item title="阴阳师"/>
            <mu-list-item title="贪吃蛇大作战"/>
            <mu-list-item title="一划到底"/>
            <mu-list-item title="全民斗地主"/>
          </mu-list>
        </bottom-sheet>
    </div>
</template>
<style>
</style>
<script>
    import RaisedButton from 'muse-components/raisedButton'
    import BottomSheet from 'muse-components/bottomSheet'
    import MuList from 'muse-components/list/'
    import MuListItem from 'muse-components/list/'
    import SubHeader from 'muse-components/subHeader'
    export default{
        data(){
            return{
               listData:[
                {title:"阴阳师"},
                {title:"贪吃蛇大作战"},
                {title:"王者荣耀"},
                {title:"炉石传说"}
               ],
               bottomSheet:false
            }

        },
        components:{
            RaisedButton,
            BottomSheet,
            MuList,
            MuListItem,
            SubHeader
        },
        methods:{
          closeBottomSheet(){
            this.bottomSheet = false;
          },
          openBottomSheet(){
            this.bottomSheet = true;
          }
        }
    }
</script>
