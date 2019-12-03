<template>
  <div class="CustomerAccount">
    <h1><b>Past Orders</b></h1>
    <br />
    <table>
      <tbody>
        <tr v-for="order in orders" :key="order">
          <!-- <td><b>Order ID:</b> {{ order.uid }}</td> -->
          <td><Order :id="order.uid" :total_cost="order.total_cost" :total_weight="order.total_weight" :item_list="order.item_list" :status="order.status" :customer_id="order.customer_id"></Order></td>
          <td><button>Claim</button></td>
        </tr>
      </tbody>
    </table>
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
  data: function() {
    return {
      orders: [
        {
          uid: 34530,
          total_cost: 30,
          total_weight: 50,
          item_list: ["a", "b"],
          status: 0,
          credit_card: 123,
          customer_id: 33,
          staff_id: 0
        },
        {
          uid: 34529,
          total_cost: 12,
          total_weight: 12,
          item_list: ["c", "d"],
          status: 2,
          credit_card: 123,
          customer_id: 35,
          staff_id: 0
        },
	{
	  uid: 34531,
          total_cost: 12,
          total_weight: 12,
          item_list: ["c", "d"],
          status: 2,
          credit_card: 123,
          customer_id: 35,
          staff_id: 0
	}
      ]
    };
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