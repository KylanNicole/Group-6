<template>
  <button v-on:click="openForm">Login</button>
</template>

<script>
export default {
  name: "Login",
  methods: {
    openForm: function(){
      console.log("opening");
    }
  }
};
</script>
