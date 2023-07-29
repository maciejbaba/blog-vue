<template>
  <Header class="header"/>
  <Main class="main"/>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Main from "./Main.vue";
</script>

<style scoped>
.header {
  height: 10vh;
}

.main {
  height: 90vh;
}
</style>
