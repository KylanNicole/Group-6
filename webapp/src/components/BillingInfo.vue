<template>
    <div>
        <form>
        <h1> Billing Info</h1>
        <input type="text" name="fname" placeholder="Name on Card"></input><br>
        <input type="text" name="creditcard" placeholder="Card Number"></input><br>
        <input type="text" name="date" placeholder="Expires"></input><br>
        <input type="text" name="cvv" placeholder="CVV"></input>
        <p>Billing Address</p>
        <input type="checkbox" value="checkbox">Billing Address is same as Shipping Address</input><br>
        <input type="text" name="address" placeholder="Street Address"></input><br>
        <input type="text" name="City" placeholder="City"></input><br>
        <input type="text" name="state" placeholder="State"></input><br>
        <input type="text" name="Zip" placeholder="Zip"></input><br>
        </form>
    </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  data() {
    return {
      hideDetails: true,
      user_data:
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
    };
  }
};
</script>

<style scoped>
div {
  width: 500px;
  border-radius: 5px;
  border-bottom: solid 1px darkgray;
  background-color: #8d9b77;
  padding: 10px;
  margin: 10px auto 10px auto;
  display: block;
}
img {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
h1 {
  font-weight: bold;
  font-size: 16pt;
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
  background-color: #8d9b77;
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
  background-color: #8d9b77;
  z-index: 0;
}
</style>