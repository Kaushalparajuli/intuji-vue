<template>
  <Navbar></Navbar>
  <main class="min-h-[100vh]">
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>
<script setup>
import Navbar from "@/layouts/common/Navbar.vue";
import Footer from "@/layouts/common/Footer.vue";
</script>
