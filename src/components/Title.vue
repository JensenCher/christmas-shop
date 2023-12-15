<template>
  <div>{{ msg }}</div>
</template>

<style scoped></style>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>
