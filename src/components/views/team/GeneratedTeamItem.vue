<template>
  <div class="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-xl">
    <div>
      <h6 class="text-[18px]">{{data.name}}</h6>
      <div class="flex">
        <span class="text-gray-400">{{participantsCount}} participants in {{props.data?.teams?.length}} teams</span>
      </div>
    </div>
    <div>
      <button @click="$router.push('/group/'+data.uuid)" class="flex hover:bg-indigo-500 hover:text-white p-2 px-4 transition-all transition-duration-300 rounded-xl gap-2" title="" label="">
        <span>View</span>
        <EyeIcon></EyeIcon>
      </button>
    </div>
  </div>
</template>
<script setup>
import {EyeIcon} from "hugeicons-vue";
import Button from "@/components/form/Button.vue";
import {computed} from "vue";

const props = defineProps({
  data:{
    default:{},
    required:true,
    type:Object
  },
})

const participantsCount = computed(() => {
  return props.data?.teams?.reduce((total, team) => {
    return total + team?.players_count;
  }, 0);
});

</script>
