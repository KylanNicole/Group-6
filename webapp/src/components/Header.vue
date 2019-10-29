<template>
  <div id="header">
    <img id="logo" src="../assets/logo.png">
    <a href="foo">Spices</a>
    <a href="foo">Herbs</a>
    <a href="foo">Salts</a>
    <a href="foo">Falvor Profiles</a>
    <a href="foo">Misc</a>
    <SearchBar/>
    <div id="user-content">
      <Login/>
      <!-- <button v-on:click="loginModalActive = true">LOGIN</button> -->
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
  </template>

<script>
import SearchBar from "./SearchBar.vue";
import Login from "./Login.vue";
export default {
    name: "Header",
    components: {
        SearchBar,
        Login
    }
};
</script>

<style scoped>
#header {
    width: 100%;
    padding: 15px 15px 15px 15px;
    border-bottom: solid #AAAAAA 1px;
    position: sticky;
    top: 0;
    background-color: #FDFDFD;
}
#logo {
    width: 20px;
    height: 20px;
}
#user-content {
    display: inline;
    float: right;
}
a {
    text-decoration: none;
    margin: 0 0 0 20px;
    line-height: 30%;
}
button {
    padding: 3px;
    border-radius: 5px;
    border-style: none;
    background-color: #EEEEEE;
    margin-left: 5px;
    color: #888888;
    cursor: pointer;
}
</style>
