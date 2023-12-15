<template>
  <div class="relative">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style></style>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
