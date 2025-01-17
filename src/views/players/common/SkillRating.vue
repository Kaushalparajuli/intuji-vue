<template>
  <div class="flex">
    <div
      v-for="i in 5"
      :key="i"
      class="border cursor-pointer p-2 px-4"
      :class="{ active: i <= hoverIndex }"
      @mouseover="!disableHover? hoverEffect(i):null"
      @mouseleave="resetHover"
      @click="!disableHover?selectRating(i):null"
    >
      {{ i }}
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

const props = defineProps({
  modelValue: {
    default: 0,
    type: Number,
  },
  disableHover: {
    default: false,
    type: Boolean,
  },
});

const emits = defineEmits(["update:modelValue"]);

onMounted(()=>{
  if (props.modelValue>0){
    hoverIndex.value = props.modelValue
  }
})

const hoverIndex = ref(0);

const hoverEffect = (index) => {
  hoverIndex.value = index;
};

const resetHover = () => {
  hoverIndex.value = props.modelValue;
};

const selectRating = (index) => {
  emits("update:modelValue", index);
};
</script>

<style>
.active {
  background-color: rgb(79 70 229);
  color: #fff;
}
</style>
