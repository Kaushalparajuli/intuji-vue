<template>
  <h4 class="text-xl font-medium">
    {{title}}
  </h4>
</template>
<script setup>
defineProps({
  title:{
    default:'',
    required:true,
    type:String
  }
})

</script>
