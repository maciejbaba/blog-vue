<template lang="">
  <main class="mx-auto w-1/2 mt-4 flex flex-col gap-4">
    <c-heading>
      <p class="">About me &nbsp;<font-awesome-icon icon="fa-solid fa-eye" /></p>
      <hr />
    </c-heading>
    <p>
      Lorem ipsum dolor sit amet consectetur
      <span class="text-[#606c38] italic">adipisicing elit</span>.

      <br /><br />
      Quisquam voluptatibus, quibusdam, quia, quae voluptatem voluptatum quos
      exercitationem
      <span class="text-[#606c38] italic">quod voluptate quas</span> doloribus.
      Quisquam voluptatibus, quibusdam, quia, quae voluptatem voluptatum quos
      exercitationem quod voluptate quas doloribus.

      <br /><br />
      Quisquam voluptatibus, quibusdam, quia, quae
      <span class="text-[#606c38] italic">voluptatem voluptatum</span> quos
      exercitationem quod voluptate quas doloribus. Quisquam voluptatibus,
      quibusdam, quia, quae voluptatem voluptatum quos exercitationem quod
      voluptate quas doloribus.
    </p>
  </main>
</template>
<script lang="ts">
import { CHeading } from "@chakra-ui/vue-next";
export default {
  components: {
    CHeading,
  },
};
</script>
<style lang=""></style>
