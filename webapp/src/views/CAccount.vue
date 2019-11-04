<template>
  <div class="CustomerAccount">
     <h1>My Account</h1>
     <h3>Name: Beanut Putter</h3>
     <h3>Email: mchammer@email.com</h3>
     <br>
     <h2>My Orders</h2>
     <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "custaccount",
  data() {
     return {
        items: [
           { uid:1, total_cost:30, total_weight:50, item_list:["a", "b"], status:0, credit_card:123, customer_id:33, staff_id:0 },
           { uid:2, total_cost:20, total_weight:30, item_list:["ac"], status:1, credit_card:123, customer_id:33, staff_id:0 }
        ]
     }
  }
};
</script>
