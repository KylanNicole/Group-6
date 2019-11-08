<template>
  <div class="CustomerAccount">
    <h1>My Account</h1>
    <h3>Name: {{ user_data[0].f_name }} {{ user_data[0].l_name }}</h3>
    <h3>Email: {{ user_data[0].email }}</h3>
    <br />
    <h2>My Orders</h2>
    <table>
      <tbody>
        <tr v-for="order in orders" :key="order">
          <td>{{ order.total_cost }}</td>
          <td>{{ order.total_weight }}</td>
          <td>{{ order.item_list }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "custaccount",
  data: function() {
    return {
      user_data: [
        {
          uid: 0,
          f_name: "Beanut",
          l_name: "Putter",
          ccid: 123,
          address_id: 4,
          email: "mchammer@email.com",
          Pass: "youcanttouchthis",
          Permission: 0
        }
      ],
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
