<template>
  <button
    :class="[
      type==='primary'?'bg-indigo-100 text-indigo-600 hover:text-white hover:bg-indigo-600':'',
      type==='negative'?' bg-red-100 text-red-600 hover:text-white hover:bg-red-600':''
    ]"
    class="  h-[50px] w-[50px]  flex justify-center items-center rounded-full  transition-duration-300  hover:shadow-xl" title="button" label="">
    <slot></slot>
  </button>
</template>
<script setup>
defineProps({
  type:{
    default:'primary',
    type:String,
  }
})
</script>
