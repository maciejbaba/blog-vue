<template>
  <c-box class="flex gap-5 justify-between uppercase font-bold text-[#fefae0]">
    <c-link
      class="hover:text-[#dda15e] relative inline-block transition duration-500 ease-in-out before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-full before:h-[5px] before:bg-[#dda15e] before:opacity-0 before:transition-all before:duration-500 before:ease-in-out hover:before:opacity-100"
      as="router-link"
      to="/"
      >home</c-link
    >
    <c-link
      class="hover:text-[#dda15e] transition duration-500 ease-in-out"
      as="router-link"
      to="/posts"
      >posts</c-link
    >
    <c-link
      class="hover:text-[#dda15e] transition duration-500 ease-in-out"
      as="router-link"
      to="/about"
      >about</c-link
    >
    <c-link
      class="hover:text-[#dda15e] transition duration-500 ease-in-out"
      as="router-link"
      to="/contact"
      >contact</c-link
    >
  </c-box>
</template>
<script lang="ts">
import { CLink, CBox } from "@chakra-ui/vue-next";
export default {
  components: {
    CLink,
    CBox,
  },
};
</script>
