<template>
  <header class="flex justify-around">
    <CHeading>
      <h1 class="text-3xl font-bold p-2">My Blog</h1>
      <font-awesome-icon icon="fa-solid fa-blog" />
    </CHeading>
    <Nav />
  </header>
</template>u
<script lang="ts">
import Nav from "./Nav.vue";
import { CHeading } from "@chakra-ui/vue-next";
export default {
  components: {
    Nav,
    CHeading,
  },
};
</script>
<style scoped></style>
