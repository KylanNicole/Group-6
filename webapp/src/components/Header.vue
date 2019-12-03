<template>
  <div id="header">
    <div id="brand">
      <router-link to="/" style="margin: 0;">
        <h1>The Spice Cabinet</h1>
      </router-link>
    </div>

    <div id="user-links">
      <div v-if="this.$store.state.loginState.loggedIn" style="display: inline">
        <router-link to="/myaccount"><b>Hi,
          {{this.$store.state.loginState.user.firstname}}</b>
        </router-link>
        <button @click="logout" class="user-button">LOGOUT</button>
      </div>
      <div v-else style="display: inline">
        <button @click="toggleLogin" class="user-button">LOGIN</button>
        
      </div>
      <Login ref="login"/>
      <button @click="toggleCart" class="user-button">CART</button>
      <Cart :class="{hidden : hideCart}"/>
      <router-link v-if="this.$store.state.loginState.loggedIn &&
      this.$store.state.loginState.user.permission < 3" to="/dashboard" style="margin: 0">
        <button class="user-button">DASHBOARD</button>
        
      </router-link>
    </div>

    <div id="links">
      <div class="center">
      <router-link :to="{ name: 'Shop', params: { tag: 'spice'}}">SPICES</router-link>
      <router-link :to="{ name: 'Shop', params: { tag: 'herb'}}">HERBS</router-link>
      <router-link :to="{ name: 'Shop', params: { tag: 'salt'}}">SALTS</router-link>
      <router-link :to="{ name: 'Shop', params: { tag: 'flavor'}}">FLAVORS</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Login from "./Login.vue";
import Cart from "./Cart.vue";
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
    };
  },
  methods: {
    toggleCart() {
      this.hideCart = !this.hideCart;
    },
    toggleLogin() {
      this.$refs.login.modalActive = true;
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Brand Font";
  src: url("../assets/day-roman.regular.ttf") format("truetype");
}

#header {
  width: 100%;
  padding: 15px;
  border-bottom: solid #7aa256 1px;
  position: sticky;
  top: 0;
  background-color: rgba(82, 45, 26, 0.8);
  display: block;
  z-index: 10;
}

#brand {
  float: left;
}
#brand h1 {
  font-family: Brand Font;
  display: inline;
  line-height: 10%;
  color: #7aa256;
}

#links {
  width: 100%;
  text-align: center;
}

a {
  color: #cc783c;
  margin: 10px;
}

a:hover {
  color: #f98634;
}

#user-links {
  float: right;
}

.user-button{
  margin-left: -1px;;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #7aa256;
  border-radius: 0;
  color: #7aa256;
  cursor: pointer;
  display: inline;
}

#user-links button:hover {
  color: #9ad466;
}

.hidden {
  display: none;
}
</style>
