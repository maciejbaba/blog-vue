<template>
  <div>
    <h1>Copyright Maciej Bąba &copy; {{ year }}</h1>
  </div>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<style scoped></style>
