<template>
  <div class="section">
    <div z-index=-15>
    <HelloWorld/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  }
};
</script>

<style scoped>
div {
  background-image: "@/assets/background.jpg";
}
</style>