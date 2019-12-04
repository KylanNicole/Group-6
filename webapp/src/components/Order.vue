<template>
  <div class="order">
    <h2>Order ID: {{id}}</h2>
    <button @click="clickMethod">Details</button>
    <div :class="{hide : hideDetails}">
      <p>Price: ${{total_cost}}</p>
      <p>Weight: {{total_weight}}</p>
      <p>Status: {{status}}</p>
      <p>Customer ID: {{customer_id}}</p>
      <p>Items:</p>
      <div>
        <ul v-for="i in item_list.length">
          <li>{{item_list[i-1]}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {
    id: Number,
    total_cost: Number,
    total_weight: Number,
    item_list: String,
    status: Number,
    customer_id: Number
  },
  data() {
    return {
      hideDetails: true
    };
  },
  methods: {
    clickMethod() {
      this.hideDetails = !this.hideDetails;
    }
  }
};
</script>

<style scoped>
div {
  width: 1000px;
  background-color: white;
}
.order {
  border: solid 1px black;
}
h2 {
  display: inline;
}
button {
  float: right;
  margin-left: -1px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #7aa256;
  border-radius: 0;
  color: #7aa256;
  cursor: pointer;
}
.hide {
  display: none;
}
</style>