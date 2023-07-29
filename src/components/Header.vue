<template>
  <div class="header">
    <h1>My Blog</h1>
    <Nav />
  </div>
</template>
<script setup lang="ts">
import Nav from "./Nav.vue";
</script>
<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
}
</style>
