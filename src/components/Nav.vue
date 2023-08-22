<!--
  style="text-decoration: none;"
  is used to remove the underline from the link
-->

<template>
  <c-box class="flex gap-5 justify-between uppercase font-bold text-[#fefae0]">
    <c-link
      class="hover:text-[#dda15e] relative inline-block transition duration-500 ease-in-out before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-0 hover:before:w-full before:h-[5px] before:bg-[#dda15e] before:opacity-100 before:transition-all before:duration-500 before:ease-in-out"
      as="router-link"
      style="text-decoration: none"
      to="/"
      >home</c-link
    >
    <c-link
      class="hover:text-[#dda15e] relative inline-block transition duration-500 ease-in-out before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-0 hover:before:w-full before:h-[5px] before:bg-[#dda15e] before:opacity-100 before:transition-all before:duration-500 before:ease-in-out"
      as="router-link"
      to="/posts"
      style="text-decoration: none"
      >posts</c-link
    >
    <c-link
      class="hover:text-[#dda15e] relative inline-block transition duration-500 ease-in-out before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-0 hover:before:w-full before:h-[5px] before:bg-[#dda15e] before:opacity-100 before:transition-all before:duration-500 before:ease-in-out"
      as="router-link"
      to="/about"
      style="text-decoration: none"
      >about</c-link
    >
    <c-link
      class="hover:text-[#dda15e] relative inline-block transition duration-500 ease-in-out before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-0 hover:before:w-full before:h-[5px] before:bg-[#dda15e] before:opacity-100 before:transition-all before:duration-500 before:ease-in-out"
      as="router-link"
      to="/contact"
      style="text-decoration: none"
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
