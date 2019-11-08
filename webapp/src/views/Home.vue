<template>
  <div class="section">
    <Cart/>
    <SpiceInfo/>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SpiceInfo from "@/components/SpiceInfo.vue";
import Cart from "@/components/Cart.vue"
export default {
  name: "home",
  components: {
    HelloWorld,
    SpiceInfo,
    Cart
  }
};
</script>
