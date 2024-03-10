<template>
  <main class="flex flex-col items-center justify-center min-h-screen">
    <c-box
      v-for="post in posts"
      :key="post.id"
      class="mb-4 p-4 w-1/2 shadow-lg rounded-lg cursor-pointer"
      @click="goToPost(post.id)"
    >
      <h2 class="text-xl font-bold mb-2">{{ post.id }} - {{ post.title }}</h2>
      <p class="text-gray-700">{{ post.content }}</p>
    </c-box>
  </main>
</template>

<script lang="ts">
import { CBox } from "@chakra-ui/vue-next";
import { useRouter } from "vue-router";

export default {
  components: {
    CBox,
  },
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    goToPost: function (postId) {
      this.$router.push(`/posts/${postId}`)
    },
    getPosts: function () {
      fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data));
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
