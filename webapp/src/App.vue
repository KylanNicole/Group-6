<template>
  <div id="app">
    <Header></Header>
    <!-- <b-modal :active.sync="isLoginModalActive"
      has-modal-card
      :can-cancel="false"
    >
      <LoginForm v-on:close="isLoginModalActive = false" />
    </b-modal>
    <router-view />-->
    <Portal />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import Header from "@/components/Header.vue"
import Portal from "@/views/Portal.vue"
export default {
  components: { LoginForm, Header, Portal},
  data: function() {
    return {
      isLoginModalActive: false
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.state.loginState.loggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        return this.$router.push("/");
      });
    }
  },
  mounted: function() {
    this.$store.dispatch("checkLoggedIn");
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active,
    &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
