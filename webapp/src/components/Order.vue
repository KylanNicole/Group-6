<template>
  <div class="order">
    <h2>Order ID: {{id}}</h2>
    <button v-if="verifyAvailable" @click="claimOrder">Claim</button>
    <button v-if="verifyClaimed" @click="finishOrder">Finish</button>
    <button v-if="verifyFinished" @click="archiveOrder">Shipped</button>
    <button @click="clickMethod">Details</button>
    <div :class="{hide : hideDetails}">
      <p><b>Price:</b> ${{order.total_cost}}</p>
      <p><b>Weight:</b> {{order.total_weight}}</p>
      <p><b>Status:</b> {{stringStatus}}</p>
      <!--<p><b>Customer ID:</b> {{customer_id}}</p>-->
      <p><b>Items:</b></p>
      <table style="border: 1px solid black;">
        <tr v-for="item in order.order_items" :key="item.id">
          <td><b>{{item.item.title}}</b></td>
          <td>{{item.weight}}g</td>
          <td>${{item.cost.toFixed(2)}}</td>
          <td><img :src='item.item.image' style="height: 60px;"></td>
        </tr>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {
    id: Number
  },
  data() {
    return {
      hideDetails: true
    };
  },
  computed: {
    order() {
      return this.$store.state.orders.find(order => {
        return (order.id == this.$props.id);
      })
    },
    stringStatus() {
      let status = this.order.order_status;
      if(status == 2) {
        return "Processing..."
      } else if(status == 1) {
        return "Packaged!"
      } else if(status == 0) {
        return "Shipped!"
      }
    },
    verifyAvailable() {
      return this.$store.state.loginState.user.permission <= 2 &&
      this.order.staff_id < 0;
    },
    verifyClaimed() {
      return (this.$store.state.loginState.user.permission <= 2 &&
      this.order.staff_id == this.$store.state.loginState.user.id &&
      this.order.order_status == 2);
    },
    verifyFinished() {
      return (this.$store.state.loginState.user.permission <= 2 &&
      this.order.staff_id == this.$store.state.loginState.user.id &&
      this.order.order_status == 1)
    }
  },
  methods: {
    clickMethod() {
      this.hideDetails = !this.hideDetails;
    },
    claimOrder() {
      this.hideDetails = false;
      this.$store.dispatch("updateOrder", 
      Object.assign({}, this.order, {staff_id : this.$store.state.loginState.user.id}));
    },
    finishOrder() {
      this.hideDetails = true;
      this.$store.dispatch("updateOrder",
      Object.assign({}, this.order, {order_status : 1}));
    },
    archiveOrder() {
      this.$store.dispatch("updateOrder",
      Object.assign({}, this.order, {order_status : 0}));
    }
  }
};
</script>

<style scoped>
div {
  width: 50%;
  margin: auto;
}
.order {

  border: solid 1px #7aa256;
  /* border: solid 1px black; */
  overflow: hidden;
  padding: 5px;
  background-color: white;
  margin-bottom: -1px;
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

table {
  border: solid 1px black;
  vertical-align: middle;
}

table tr {
  border: solid 1px black;
}

table td {
  border: solid 1px black;
  padding: 10px;
}
</style>