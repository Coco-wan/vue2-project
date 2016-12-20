<template>
    <div>
      <v-header :title='title' :canBack=true ></v-header>
      <v-content>
        this is info! Hello {{name}}.
      </v-content>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                title:'info',
                name:this.$route.params.name
            }
        },
        components:{
        },
        mounted(){
          console.log(this.$route.params)
        }
    }
</script>
