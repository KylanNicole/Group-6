<template>
  <div class="CustomerAccount">
    <h1><b>Past Orders</b></h1>
    <br />
    <table>
      <tbody>
        <tr v-for="order in orders" :key="order">
          <td><b>Order ID:</b> {{ order.uid }}</td>
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
export default {
  name: "custaccount",
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
