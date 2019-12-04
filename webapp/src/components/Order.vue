<template>
  <div class="order" style="background-color:rgba(82, 45, 26, 0.8);">
    <h2><b>Order ID:</b> {{id}}</h2>
    <button>Claim</button>
    <button @click="clickMethod">Details</button>
    <div :class="{hide : hideDetails}">
      <p><b>Price:</b> ${{total_cost}}</p>
      <p><b>Weight:</b> {{total_weight}}</p>
      <p><b>Status:</b> {{status}}</p>
      <p><b>Customer ID:</b> {{customer_id}}</p>
      <p><b>Items:</b></p>
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
  },
  created(){
    this.$store.dispatch("getOrders");
  }
};
</script>

<style scoped>
div {
  width: 1000px;
  color:white;
}
.order {

  border: solid 1px #7aa256;
  /* border: solid 1px black; */
  overflow: hidden;
  padding: 5px;
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