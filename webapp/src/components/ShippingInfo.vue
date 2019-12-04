<template>
    <div class="body">
      <h1>Shipping Info</h1>
        <form>
        <input type="text" name="fname" v-model="user_data.f_name" placeholder="First Name">
        <input type="text" name="lname" v-model="user_data.l_name" placeholder="Last Name">
        <br/>
        <div v-if="!inStore">
          <h1>Street Address</h1>
          <input type="text" name="address" placeholder="Street Address" v-model="address.street">
          <input type="text" name="City" placeholder="City" v-model="address.city">
          <input type="text" name="state" placeholder="State" v-model="address.state">
          <input type="text" name="Zip" placeholder="Zip" v-model="address.zip">
        </div>
        <input type="checkbox" value="checkbox" v-model="inStore" style="display: inline"/>
        <label>Pick up in store</label>
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
        },
        address:
        {
          street: "",
          city: "",
          state: "",
          zip: ""
        },
        inStore: false
    };
  }
};
</script>

<style scoped>
.body {
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

input {
  display: block;
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
  background-color: #8d9b77;
  z-index: 0;
}
</style>