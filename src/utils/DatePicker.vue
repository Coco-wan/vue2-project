<template>
    <div>
      <mu-date-picker v-model="selectDate" hintText="选择时间 v-model同步value"/>
    </div>
</template>
<style>

</style>
<script>
    import MuDatePicker from 'muse-components/datePicker/datePickerDialog'
    export default{
        data(){
            return{
                selectDate:''
            }
        },
        components:{
            MuDatePicker,
        }
    }
</script>
