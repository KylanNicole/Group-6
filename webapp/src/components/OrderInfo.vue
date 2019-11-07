<template>
    <div>
        <h2>Order Number {{ order.uid }}</h2>
        <h5>Ordered: {{ order.item_list }}</h5>
        <h5>Price: {{ order.total_cost }}</h5>
        <h5>Status: {{ order.status }}</h5>
    </div>
</template>

<script>
export default {
  name: "OrderInfo",
  data() {
    return {
      hideDetails: true,
      order:
        {
          uid: 1,
          total_cost: 30,
          total_weight: 50,
          item_list: ["a", "b"],
          status: 0,
          credit_card: 123,
          customer_id: 33,
          staff_id: 0
        }
    };
  }
};
</script>

<style scoped>
div {
  width: 1000px;
  border-radius: 5px;
  border-bottom: solid 1px darkgray;
  background-color: #eeeeee;
  padding: 10px;
  margin: 5px;
  display: inline-block;
}
img {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
h4 {
  font-weight: bold;
  text-align: center;
}
button {
  width: 25%;
  margin: auto;
  display: block;
}
.hidden {
  display: none;
}
.window {
  top: 10%;
  left: 25%;
  position: absolute;
  width: 50%;
  margin: auto;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
}
.center {
  display: block;
  margin: auto;
}
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 0;
}
</style>