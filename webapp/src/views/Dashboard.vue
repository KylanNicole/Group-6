<template>
  <div v-if="this.$store.dispatch('authorized', 2)" class="section">
    <div id="accountInfo">
      <p>
        Name: {{this.$store.state.loginState.user.firstname + " " + this.$store.state.loginState.user.lastname}}<br>
        Email: {{this.$store.state.loginState.user.email}}<br>
        Account Permissions: {{this.permStr[this.$store.state.loginState.user.permission]}}<br>
      </p>
    </div>
    <router-link to="/manage/staff">
      <div class="manageLink">Manage Staff</div>
    </router-link>
    <router-link to="/manage/orders">
      <div class="manageLink">Manage Orders</div>
    </router-link>
    <router-link to="/manage/banner">
      <div class="manageLink">Manage Banners</div>
    </router-link>
    <router-link to="/Spices">
      <div class="manageLink">Manage Spices</div>
    </router-link>
    <hr/>
    <Order v-for="order in orders" :key="order" v-bind="order"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Order from "@/components/Order.vue"

export default {
  name: "dashboard",
  components: {
    Order
  },
  // computed: {
  //   getOrders() {
  //     console.log("blah");
  //   }
  // },
  created() {
    this.$store.dispatch("getOrders");
    this.order = this.$store.state.orders;

    // this.orders = this.computed.getOrders();
  },
  data() {
    return {
      permStr: ["Owner", "Admin", "Staff", "Error"],
      orders: []
    }
  }
};
</script>

<style>
#accountInfo{
  background-color: #aaaaaa;

}
.manageLink{
  background-color: #cccccc;
  border-radius: 5px;
  /* width: 100%; */
  display: inline-block;
  padding: 4px;
  margin: 4px;
}
</style>
