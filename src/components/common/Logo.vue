<template>
    <div class="flex cursor-pointer gap-2" @click="$router.push('/')">
      <img width="50px" :src="LOGO" alt="logo">
      <div>
        <h6 class="text-[30px] leading-8 mb-0 font-bold">Random Team Generator</h6>
        <p class="text-gray-400 capitalize">Make your dream team</p>
      </div>
    </div>
</template>

<script setup>
import LOGO from '../../assets/image/logo.svg'
</script>
