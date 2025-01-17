<template>
  <div class="flex w-full flex-col gap-2">
    <h6>{{label}}</h6>
    <input v-model="value" class="border w-full p-4 rounded-xl" :placeholder="placeholder" />
  </div>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({
  modelValue:{
    default:'',
  },
  label:{
    default:'',
  },
  placeholder:{
    default:'',
  }
})

const emits = defineEmits(['update:modelValue'])
const  value = computed({
  get(){
    return props.modelValue
  },
  set(val){
    emits('update:modelValue',val)
  }
})

</script>
