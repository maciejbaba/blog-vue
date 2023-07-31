<template>
  <nav class="flex gap-5 justify-between uppercase font-bold text-[#fefae0]">
    <c-link as="router-link" to="/">home</c-link>
    <c-link as="router-link" to="/posts">posts</c-link>
    <c-link as="router-link" to="/about">about</c-link>
    <c-link as="router-link" to="/contact">contact</c-link>
  </nav>
</template>
<script lang="ts">
import { CLink } from "@chakra-ui/vue-next";
export default {
  components: {
    CLink,
  },
};
</script>