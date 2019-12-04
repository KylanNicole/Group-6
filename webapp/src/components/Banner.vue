<template>
  <div>
      <div v-if="this.$store.state.loginState.loggedIn &&
      this.$store.state.loginState.user.permission < 2" to="/dashboard" style="float:right;">
        <button @click="deleteBanner">DELETE</button>
    </div>

    <router-link :to="link_to" style="margin: 0">
      <img :src="img_link"/>
      <br>
    </router-link>
    <br>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      updatedInfo: {
          id: this.id,
          img_link: this.img_link,
          link_to: this.link_to
      }
    };
  },
  props: {
    img_link: String,
    link_to: String,
    id: Number
  },
    methods: {
        deleteBanner() {
            this.$store.dispatch("deleteBanner", this.updatedInfo);
            this.$emit('changed');
        }
    }
};
</script>

<style scoped>
div {
  width: auto;
  height: 100px;
  border-color: darkslategrey;
  border-radius: 8cm;
  display: block;
}

button{
  background:red;
  border-color:red;
  border-radius:3px;
  color:white;
}
</style>