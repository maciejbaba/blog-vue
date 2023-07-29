<template lang="">
  <Header />
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>
<script lang="ts">
import Header from "../components/Header.vue";
export default { components: Header };
</script>
<style lang=""></style>
