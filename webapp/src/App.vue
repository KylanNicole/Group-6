<template>
  <div id="app">
    <Header/>
    <!--
    <div id="header">
      <router-link to="/"><img id="logo" src="./assets/logo.png"></router-link>
      <router-link to="foo">Spices</router-link>
      <router-link to="foo">Herbs</router-link>
      <router-link to="foo">Salts</router-link>
      <router-link to="foo">Falvor Profiles</router-link>
      <router-link to="foo">Misc</router-link>
      <SearchBar/>
      <div id="user-content">
        <Login/>
        <button>CART</button>
        <button>TRACK</button>
      </div>
      <b-modal
        :active.sync="loginModalActive"
        has-modal-card
      >
        <Login/>
      </b-modal>
    </div>
    -->
    <!-- <b-modal :active.sync="isLoginModalActive"
      has-modal-card
      :can-cancel="false"
    >
      <LoginForm v-on:close="isLoginModalActive = false" />
    </b-modal> -->
    <router-view />
    <!-- Content filler -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="foot">
      <hr>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/myaccount">My Account</router-link> |
      <router-link to="/">Tracking</router-link> |
      <router-link to="/">Contact us</router-link>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  components: { Header},
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

#header {
    width: 100%;
    padding: 15px 15px 15px 15px;
    border-bottom: solid #AAAAAA 1px;
    position: sticky;
    top: 0;
    background-color: #FDFDFD;
}
#header #logo {
    width: 20px;
    height: 20px;
}
#header #user-content {
    display: inline;
    float: right;
}
#header a {
    text-decoration: none;
    margin: 0 0 0 20px;
    line-height: 30%;
}
#header button {
    padding: 3px;
    border-radius: 5px;
    border-style: none;
    background-color: #EEEEEE;
    margin-left: 5px;
    color: #888888;
    cursor: pointer;
}
#foot {
  padding: 30px;
  float: bottom;
  position: sticky;
  bottom: 0px;
  height: 30px;
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
</style>
