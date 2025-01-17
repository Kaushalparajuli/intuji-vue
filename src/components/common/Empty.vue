<template>
  <div class="flex flex-col mt-5 bg-gray-100 p-3 rounded-xl items-center">
    <DropboxIcon class="text-gray-500" size="80"></DropboxIcon>
    <h6 class="text-gray-500">{{msg}}</h6>
  </div>
</template>
<script setup>
import {DropboxIcon} from "hugeicons-vue";
defineProps({
  msg:{
    default:''
  }
})
</script>
