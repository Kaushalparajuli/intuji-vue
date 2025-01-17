<template>

  <Container class="pb-20">
    <Banner></Banner>

    <div class="w-full max-w-[700px] mx-auto">
      <PageSubHeading title="Generated Teams"></PageSubHeading>
      <div class="flex w-full flex-col mt-5 gap-4">
        <GeneratedTeamItem v-for="g in groupList" :data="g"></GeneratedTeamItem>
      </div>
      <empty msg="No Team Group Found." v-if="groupList.length ===0 && !isLoading"></empty>
    </div>

  </Container>



</template>
<script setup>
import {onMounted, ref} from "vue";
import Banner from "@/views/home/common/Banner.vue";
import Container from "@/components/common/Container.vue";
import PageHeading from "@/components/common/PageHeading.vue";
import GeneratedTeamItem from "@/components/views/team/GeneratedTeamItem.vue";
import PageSubHeading from "@/components/common/PageSubHeading.vue";
import useApi from "@/composables/useApi.js";
import Empty from "@/components/common/Empty.vue";

const groupList = ref([])
const isLoading = ref(false)

onMounted(()=>{
  getAllGroups()
})

const getAllGroups = ()=>{
  isLoading.value = true;
  useApi().get('/group').then(res=>{
    console.log('groups::',res.data)
    groupList.value= res.data.data;
  }).finally(f=>{
    isLoading.value = false;
  })
}


</script>
