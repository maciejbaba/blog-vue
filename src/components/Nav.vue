<template lang="">
  <nav class="nav">
    <a href="/">home</a>
    <a href="/posts">posts</a>
    <a href="/about">about</a>
    <a href="/contact">contact</a>
  </nav>
</template>
<script lang="ts">
export default {};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #ccc;
}

.nav a {
  padding: 1rem;
}
</style>
