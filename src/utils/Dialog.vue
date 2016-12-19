<template>
  <div>
    <flat-button label="dialog" @click='open'/>
    <v-dialog :open="dialog" title="Dialog" @close="close">
test
      <flat-button slot="actions" @click="close" promary label="取消"/>
      <flat-button slot="actions" @click="close" promary label="确定"/>
    </v-dialog>
  </div>
</template>
<style>

</style>
<script>
    import FlatButton from 'muse-components/flatButton'
    import Dialog from 'muse-components/dialog'
    export default{
      data () {
      return {
        dialog: false
      }
    },
    methods: {
      open () {
        this.dialog = true
      },
      close () {
        this.dialog = false
      }
    },
    components:{
      VDialog:Dialog,
      FlatButton
    }
    }

</script>
