<template>
  <div class="section">
    <div id="accountInfo">
      <p>
        Username: {{"Admin"}}<br>
        Email: {{"superrealemail@email.com"}}<br>
        Account Permissions: {{"Owner"}}<br>
      </p>
    </div>    
    <router-link to="manage/staff">
      <div class="manageLink">Manage Staff</div>
    </router-link>
    <router-link to="manage/orders">
      <div class="manageLink">Manage Orders</div>
    </router-link>
    <router-link to="manage/banner">
      <div class="manageLink">Manage Banners</div>
    </router-link>
    <hr/>
    <Order v-for="order in orders" v-bind="order"/>
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
  data() {
    return {
      orders: [
        {id: 0, details: 'Meep!!!!'},
        {id: 1, details: 'Meep2!!!'}
      ]
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
