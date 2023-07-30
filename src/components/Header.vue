<template>
  <header class="flex flex-row">
    <div>
      <h1 class="text-2xl font-bold">My Blog</h1>
    </div>
    <Nav />
  </header>
</template>
<script lang="ts">
import Nav from "./Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
<style scoped></style>
