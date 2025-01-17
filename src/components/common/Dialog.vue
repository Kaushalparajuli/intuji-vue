<template>
  <div class="bg-black  bg-opacity-50 fixed top-0 left-0 h-full w-full flex justify-center items-center">
    <div class=" shadow default-scale  transition-all  transition-duration-500 rounded-xl border bg-white  gap-4 min-w-[500px]">
        <div class="flex bg-gray-50 rounded-t-xl border-b justify-between p-4 items-center">
          <h6 class="text-2xl">{{title}}</h6>
          <IconButton v-if="showCancel" @click="$emit('cancel')" >
            <Cancel01Icon></Cancel01Icon>
          </IconButton>
        </div>
      <div class="p-4 ">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import {Cancel01Icon} from "hugeicons-vue";
import IconButton from "@/components/form/IconButton.vue";

defineProps({
  title:{
    default:'',
  },
  showCancel:{
    default:true,
  }
})
</script>
<style>
 @keyframes FadeIn {
   from{
     scale: 0.5;
   }
   to{
     scale: 1;
   }
}

.default-scale{
  animation: FadeIn ease-in-out 0.2s;
}
</style>
