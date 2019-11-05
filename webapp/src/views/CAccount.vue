<template>
  <div class="CustomerAccount">
     <h1>My Account</h1>
     <h3>Name: {{ user_data[0].f_name }} {{ user_data[0].l_name }}</h3>
     <h3>Email: {{ user_data[0].email }}</h3>
     <br>
     <h2>My Orders</h2>
     <b-table striped hover :data="orders"></b-table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "custaccount",
  data: function() {
     return {
        user_data: [
           {uid:0, f_name:"Beanut", l_name:"Putter", ccid:123, address_id:4, email:"mchammer@email.com", Pass:"youcanttouchthis", Permission:0}
        ],
         orders: [
            {uid:1, total_cost:30, total_weight:50, item_list:["a", "b"], status:0, credit_card:123, customer_id:33, staff_id:0}
         ]
     }
  }
};
</script>
