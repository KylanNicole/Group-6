<template>
  <div class="section" style="position: relative; z-index: 0;">
    <!-- <SpiceInfo/> -->
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SpiceInfo from "@/components/SpiceInfo.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    SpiceInfo
  }
};
</script>
