<template lang="">
  <main>
    <Header />
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </main>
</template>
<script lang="ts">
import Header from "../components/Header.vue";
export default { components: Header };
</script>
<style lang=""></style>
