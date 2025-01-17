<template>
  <h4 class="text-4xl capitalize font-bold" :class="[center?'text-center':'']">
    {{title}}
  </h4>
</template>
<script setup>
defineProps({
  title:{
    default:'',
    required:true,
    type:String
  },
  center:{
    default:false,
    type:Boolean
  }
})

</script>
