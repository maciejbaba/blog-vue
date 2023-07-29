<template>
  <header class="header">
    <div>
      <h1>My Blog</h1>
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
<style scoped>
.header {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
}
</style>
