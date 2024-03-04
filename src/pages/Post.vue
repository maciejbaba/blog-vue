<template>
  <CContainer maxW="container.md" class="py-10">
    <div v-if="post">
      <c-box>
        <CHeading as="h1" size="2xl" class="mb-4">{{ post.title }}</CHeading>
        <CText fontSize="md" class="text-gray-700">{{ post.content }}</CText>
      </c-box>
    </div>
    <div v-else>
      <CText fontSize="lg" class="text-center text-gray-500"
        >Post not found.</CText
      >
    </div>
  </CContainer>
</template>

<script>
import { CContainer, CHeading, CText, CBox } from "@chakra-ui/vue-next";

export default {
  components: {
    CContainer,
    CHeading,
    CText,
    CBox,
  },
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id;
      fetch(`http://localhost:3000/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => {
          const post = data[0] // backend return list with one post
          this.post = post;
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          this.post = null;
        });
    },
  },
};
</script>
