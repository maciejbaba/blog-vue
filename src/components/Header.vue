<template>
  <c-box class="flex justify-around items-center p-2 bg-[#bc6c25]">
    <c-box class="flex gap-3 text-[#fefae0]">
      <font-awesome-icon class="text-4xl" icon="fa-solid fa-blog" />
      <c-heading class="font-bold italic">My Blog</c-heading>
    </c-box>
    <Nav />
  </c-box>
  <c-box class="p-1 bg-[#dda15e]" />
</template>
<script lang="ts">
import Nav from "./Nav.vue";
import { CHeading, CBox } from "@chakra-ui/vue-next";
export default {
  components: {
    Nav,
    CHeading,
    CBox,
  },
};
</script>
<style scoped></style>
