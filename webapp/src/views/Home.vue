<template>
  <div class="section">
    <SpiceInfo/>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
