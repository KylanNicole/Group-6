<template>
  <div class="CustomerAccount" v-if="this.$store.dispatch('authorized', 3)">
    <h1>My Account</h1>
    <h3>Name: {{ this.$store.state.loginState.user.firstname }} {{ this.$store.state.loginState.user.lastname }}</h3>
    <h3>Email: {{ this.$store.state.loginState.user.email }}</h3>
    <br />
    <h2 style="font-size:24pt; text-align:center; color:#da782f;">My Orders</h2>
    <table>
      <tbody>
        <tr v-for="order in orders" :key="order">
          <td><Order :id="order.uid" :total_cost="order.total_cost" :total_weight="order.total_weight" :item_list="order.item_list" :status="order.status" :customer_id="order.customer_id"></Order></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Order from "@/components/Order.vue"
export default {
  name: "custaccount",
  components: {
    Order
  },
  data: function() {
    return {
      orders: [
        {
          uid: 1,
          total_cost: 30,
          total_weight: 50,
          item_list: ["a", "b"],
          status: 0,
          credit_card: 123,
          customer_id: 33,
          staff_id: 0
        },
        {
          uid: 12,
          total_cost: 12,
          total_weight: 12,
          item_list: ["c", "d"],
          status: 2,
          credit_card: 123,
          customer_id: 33,
          staff_id: 0
        }
      ]
    };
  }
};
</script>

<style scoped>
div {
  /* background-color: #8d9b77; */
}
h1{
  text-align: center;
  color: #da782f;
  font-size: 62pt;
}
h3{
  font-size: 18pt;
  margin-left: 40px;
}
</style>
