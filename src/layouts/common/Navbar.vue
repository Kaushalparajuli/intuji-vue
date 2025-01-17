<template>
<nav class="container justify-between flex items-center mx-auto py-8">
  <div class="flex">
    <Logo></Logo>
  </div>
  <div class="">
    <ul class="flex gap-8">
      <li v-for="n in navItems">
        <RouterLink class="hover:text-indigo-600 text-gray-800 transition-all" :to="n.route" >{{n.label}}</RouterLink>
      </li>
    </ul>
  </div>
</nav>
</template>
<script setup>
import Logo from "@/components/common/Logo.vue";
import {ref} from "vue";

const navItems = ref([
  {
    label:'Home',
    route:'/'
  },
  {
    label:'Manage Players',
    route:'/manage-players'
  },
  {
    label:'Manage Team',
    route:'/manage-teams'
  }
])

</script>
