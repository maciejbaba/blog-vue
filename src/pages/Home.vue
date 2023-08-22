<template>
  <c-box class="bg-gray-100 min-h-screen">
    <c-container maxW="container.xl" class="py-12">
      <c-flex
        direction="column"
        align="center"
        justify="center"
        height="80vh"
        class="text-center"
      >
        <c-icon name="document" boxSize="8" class="mb-6" />
        <c-heading as="h1" size="2xl" class="mb-6"
          >Welcome to Vue Blog</c-heading
        >
        <c-text fontSize="lg" class="mb-6"
          >Discover amazing stories from our vibrant community.</c-text
        >
        <c-button as="router-link" to="/posts" size="lg" colorScheme="teal"
          >Explore Posts</c-button
        >
      </c-flex>
    </c-container>
  </c-box>
</template>

<script>
import {
  CBox,
  CContainer,
  CFlex,
  CIcon,
  CHeading,
  CText,
  CButton,
} from "@chakra-ui/vue-next";

export default {
  components: {
    CBox,
    CContainer,
    CFlex,
    CIcon,
    CHeading,
    CText,
    CButton,
  },
};
</script>

<style>
/* You can add any custom styles if needed */
</style>
