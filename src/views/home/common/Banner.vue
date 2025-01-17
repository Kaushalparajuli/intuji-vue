<template>

    <div class="flex flex-col gap-5 justify-center items-center min-h-[60vh]">
      <h2 class="text-5xl font-bold text-indigo-600">Make Your Dream Team </h2>
      <h3 class="text-3xl text-gray-500">With Random Team Generator</h3>
      <div class="relative mt-5">
        <input class="border rounded-[40px] p-5 min-w-[600px]" placeholder="Eg: Friday Futsal" v-model="form.name" />
        <Button @click="generateGroup" :loading="isLoading" class="absolute top-1/2 translate-y-[-50%] right-1" label="Generate Team"></Button>
      </div>
    </div>

</template>
<script setup>

import {ref} from "vue";
import Button from "@/components/form/Button.vue";
import useApi from "@/composables/useApi.js";
import router from "@/router/index.js";

const form = ref({
  name:''
})
const isLoading = ref(false)

const generateGroup = () =>{
  if (!form.value.name) return;
  isLoading.value = true
  useApi().post(`/group`,form.value).then(res=>{
    console.log('group created',res)
    router.push('/group/'+res?.data?.data?.uuid);
  }).catch(err=>{
    if (err.status ===400){
      alert(err.response.data.message)
    }

  })
    .finally(f=>{
    isLoading.value = false
  })
}

</script>
