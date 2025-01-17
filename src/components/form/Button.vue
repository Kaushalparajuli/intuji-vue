<template>
  <button
    :class="[
      loading?'bg-opacity-80 pointer-events-none':'',
      type==='primary'?'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl cursor-pointer':'',
      type==='negative'?' bg-red-600 hover:bg-red-700 hover:shadow-xl cursor-pointer':''
    ]"
    :disabled="loading"
          class=" inline-flex gap-2 items-center justify-center  p-4 rounded-[30px]  transition-duration-300 px-8 text-white  " title="button" label="">
    <span class="text-center">{{label}} </span>
    <component v-if="icon" :is="icon"></component>
    <Loading03Icon v-if="loading" class=" animate-spin"></Loading03Icon>
  </button>
</template>
<script setup>
import {Loading03Icon} from "hugeicons-vue";
defineProps({
  label:{
    default:'',
    required:true,
    type:String
  },
  icon:{
    default:null,
  },
  loading:{
    default:false,
  },
  type:{
    default:'primary',
    type:String,
  }
})

</script>
