<template lang="">
  <main>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.id }} - {{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </main>
</template>
<script lang="ts">
export default {
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts: function () {
      fetch("http://localhost:3000/posts")
        .then((response) => response.json())
        .then((data) => (this.posts = data));
    },
  },
};
</script>
<style lang=""></style>
