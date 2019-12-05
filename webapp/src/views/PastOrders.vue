<template>
  <div class="CustomerAccount" v-if="this.$store.dispatch('authorized', 2)">
    <h1><b>Past Orders</b></h1>
    <br />
      <Order v-if="order.order_status < 1" v-for="order in orders" :key="order.id" :id="order.id"/>

    <router-link to="/dashboard">
      <div class="manageLink">
        Back
      </div>
    </router-link>
  </div>
</template>

<script>
import Order from "@/components/Order.vue"
export default {
  name: "custaccount",
  components: {
    Order
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
    created() {
        this.$store.dispatch("getAllOrders");
    }
  }
};
</script>

<style scoped>

button {
  margin-left: -1px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #7aa256;
  border-radius: 0;
  color: #7aa256;
  cursor: pointer;
}
</style>