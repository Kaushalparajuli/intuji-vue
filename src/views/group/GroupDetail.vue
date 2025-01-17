<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center flex-col">
      <PageTitle :title="detail.name"/>
      <div class="flex mt-3">
        <span class="text-gray-400">{{participantsCount}} participants in {{detail?.teams?.length}} teams</span>
      </div>
    </div>

    <div class="mt-[50px]">
      <h6>Share Link</h6>
      <div class="flex items-center gap-2">
        <div class="border p-2 px-4 rounded-xl">
          {{url}}
        </div>
        <div>
          <IconButton @click="copyLink">
            <Copy01Icon></Copy01Icon>
          </IconButton>
        </div>
      </div>
    </div>




    <div class="grid grid-cols-2 gap-4 mt-10">
      <div v-for="t in detail?.teams" :key="t.index">

        <div class="flex capitalize gap-2 text-xl">
            <b>{{t?.team?.name}}</b>
            <span class="text-gray-400">
              ({{t?.players_count}})
            </span>
        </div>

        <div class="flex flex-col gap-3 mt-5">
          <div class="flex bg-gray-100 p-2 rounded-xl justify-between items-center gap-2" v-for="(p,index) in t?.players" :key="p.id">
              <div class="flex items-center gap-2">
                <div class="flex bg-white items-center justify-center h-[40px] w-[40px] rounded-full border">
                  <span>{{index+1}}</span>
                </div>
                <h6 class="text-xl">{{p?.player?.name}}</h6>
              </div>
            <div class="flex bg-indigo-500 text-white items-center justify-center h-[40px] w-[40px] rounded-full border">
              <span>{{p?.player?.skill}}</span>
            </div>
          </div>
          <div class="flex text-xl justify-end">
            Total Skill : {{getTotalSkillCount(t?.players)}}
          </div>
        </div>



      </div>
    </div>

  </div>
</template>
<script setup>
import PageTitle from "@/components/common/PageTitle.vue";
import {computed, onMounted, ref} from "vue";
import useApi from "@/composables/useApi.js";
import {useRoute} from "vue-router";
import {Copy01Icon} from "hugeicons-vue";
import IconButton from "@/components/form/IconButton.vue";

const route = useRoute()
const detail = ref({})

const url = computed(()=> window.location.href)

onMounted(()=>{
  getDetail()
})

const getTotalSkillCount = (players) =>{
  return players?.reduce((total, player) => {
    return total + player?.player?.skill;
  }, 0);
}

const participantsCount = computed(() => {
  return detail.value?.teams?.reduce((total, team) => {
    return total + team?.players_count;
  }, 0);
});

const getDetail = ()=>{
  useApi().get('/group/'+route.params.id).then(res=>{
    console.log('players::',res.data)
    detail.value = res.data.data;
  })
}

const copyLink = () => {
  const currentLink = window.location.href;
  navigator.clipboard.writeText(currentLink)
    .then(() => {
      alert('Link Copied');
    })
    .catch(err => {
      console.error('Failed to copy the link: ', err);
    });
};
</script>
