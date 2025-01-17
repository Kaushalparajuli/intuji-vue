<template>
  <Dialog :show-cancel="false" @cancel="showConfirmDialog = false" v-if="showConfirmDialog" title="Confirm Delete">
    <div class="grid grid-cols-12 max-w-[500px] gap-4">
      <div class="col-span-12">
        <h6 class=" text-xl py-6 text-gray-500">Are you sure want to delete ? </h6>
      </div>
      <div class="col-span-12  justify-between grid grid-cols-2 gap-2 items-center  ">
        <Button @click="showConfirmDialog=false" type="negative" label="Cancel"/>
        <Button :loading="isLoading" @click="remove()" label="Delete"/>
      </div>
    </div>
  </Dialog>
  <Dialog @cancel="showAddDialog = false" v-if="showAddDialog" title="Add Team">
    <form @submit.prevent="submit">
      <div class="grid grid-cols-12 max-w-[500px] gap-4">
        <div v-if="errorMessage" class="col-span-12 border-red-100 p-3 rounded-xl bg-red-50 border text-red-500">
          <p>{{errorMessage}}</p>
        </div>
        <div class="col-span-12">
          <FormInput placeholder="Team's name" label="Team Name" v-model="form.name"></FormInput>
        </div>
        <div class="col-span-12  justify-end flex  ">
          <Button :loading="isLoading" label="Submit"/>
        </div>
      </div>
    </form>
  </Dialog>
  <Container>
    <div class="min-h-[200px]  flex flex-col justify-center items-center rounded-xl">
      <PageTitle title="Manage Teams" center />
    </div>

    <div class="mt-5 max-w-[700px] mx-auto">

      <div class="flex justify-between gap-3">
        <PageHeading title="Teams"/>
        <Button @click="showAddDialog=true;resetForm()" label="Add Team" :icon="Add01Icon"></Button>
      </div>

      <div class="mt-10">
        <div v-for="(p,index) in teamList" :key="`teams-${p.id}`" class="flex mb-4 bg-gray-50 p-4 justify-between rounded-xl items-center gap-2">
          <div class="flex flex-col  gap-4">
            <h6 class="text-xl">{{p.name}}</h6>
          </div>
          <div class="flex gap-3">
            <IconButton @click="showConfirmDialog= true;form.id=p.id" type="negative">
              <Delete01Icon ></Delete01Icon>
            </IconButton>
            <IconButton  @click="edit(p)" type="primary">
              <Edit01Icon></Edit01Icon>
            </IconButton>
          </div>
        </div>
        <Empty msg="No Players Found." v-if="teamList?.length ===0 && !isLoading"></Empty>
      </div>

    </div>

  </Container>
</template>
<script setup>
import PageTitle from "@/components/common/PageTitle.vue";
import Container from "@/components/common/Container.vue";
import Dialog from "@/components/common/Dialog.vue";
import {onMounted, ref} from "vue";
import FormInput from "@/components/form/FormInput.vue";
import PageHeading from "@/components/common/PageHeading.vue";
import Button from "@/components/form/Button.vue";
import {Add01Icon, Delete01Icon, Edit01Icon} from "hugeicons-vue";
import IconButton from "@/components/form/IconButton.vue";
import useApi from "@/composables/useApi.js";
import Empty from "@/components/common/Empty.vue";

const showAddDialog = ref(false)
const showConfirmDialog = ref(false)
const isLoading = ref(false)
const teamList= ref()
const errorMessage = ref('')
const form = ref({
  name:'',
  skill:0
})
const formMode = ref('add')

onMounted(()=>{
  getAllPlayers()
})

const getAllPlayers = ()=>{
  useApi().get('/team').then(res=>{
    console.log('teams::',res.data)
    teamList.value= res.data.data;
  })
}

const submit = ()=>{
  if (!isValidated()){
    return;
  }
  isLoading.value = true;
  if (formMode.value==='add'){
    useApi().post('/team',form.value).then(res=>{
      console.log('Team added',res)
      showAddDialog.value= false;
      getAllPlayers()
      resetForm()
    }).finally(f=>{
      isLoading.value = false
    })
  }else{
    useApi().put(`/team/${form.value.id}`,form.value).then(res=>{
      console.log('Team edited',res)
      showAddDialog.value= false;
      getAllPlayers()
      resetForm()
    }).finally(f=>{
      isLoading.value = false
    })
  }
}

const remove = () =>{
  console.log('form',form.value)
  if (!form.value.id) return;
  useApi().delete(`/team/${form.value.id}`).then(res=>{
    console.log('Team deleted')
    showConfirmDialog.value= false;
    getAllPlayers()
    resetForm()
  }).finally(f=>{
    isLoading.value = false
  })
}

const edit = (elem)=>{
  form.value = elem;
  showAddDialog.value=true;
  formMode.value = 'edit'
}

const resetForm = () =>{
  form.value = {
    name:'',
    skill:0
  }
  formMode.value='add'
}

const isValidated =() =>{
  if (!form.value.name){
    errorMessage.value= 'Please fill all required fields.'
    return false;
  }
  errorMessage.value = ''
  return true;
}



</script>
