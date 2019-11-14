<template>
  <div id="header">
    <router-link to="/"><img id="logo" src="../assets/logo.png"></router-link>
    <router-link to="Shop">Spices</router-link>
    <router-link to="Shop">Herbs</router-link>
    <router-link to="Shop">Salts</router-link>
    <router-link to="Shop">Flavor Profiles</router-link>
    <router-link to="Shop">Misc</router-link>
    <SearchBar/>
    <div id="user-content">
      <Login/>
      <!-- <button v-on:click="loginModalActive = true">LOGIN</button> -->
      <button @click="focusCart()">CART</button>
      <Cart :class="{hidden : hideCart}"/>
      <button>TRACK</button>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Login from "./Login.vue";
import Cart from "./Cart.vue"
export default {
  name: "Header",
  components: {
    SearchBar,
    Login,
    Cart
  },
  data() {
    return {
      hideCart: true
    }
  },
  methods: {
    focusCart() {
      this.hideCart = !this.hideCart;
    }
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}
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
