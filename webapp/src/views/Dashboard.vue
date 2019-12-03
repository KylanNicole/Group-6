<template>
  <div v-if="this.$store.dispatch('authorized', 2)" class="section" >

    <div id="accountInfo">
      <p>
        Name: {{this.$store.state.loginState.user.firstname + " " + this.$store.state.loginState.user.lastname}}<br>
        Email: {{this.$store.state.loginState.user.email}}<br>
        Account Permissions: {{this.permStr[this.$store.state.loginState.user.permission]}}<br>
      </p>
    </div>
    <router-link to="/manage/staff">
      <div class="manageLink" v-if="this.$store.state.loginState.user.permission <= 0">Manage Staff</div>
    </router-link>
    <router-link to="/manage/orders" v-if="this.$store.state.loginState.user.permission <= 2">
      <div class="manageLink">Manage Orders</div>
    </router-link>
    <router-link to="/manage/banner" v-if="this.$store.state.loginState.user.permission <= 1">
      <div class="manageLink">Manage Banners</div>
    </router-link>
    <router-link to="/Spices" v-if="this.$store.state.loginState.user.permission <= 1">
      <div class="manageLink">Manage Spices</div>
    </router-link>
    <hr/>
    <br>
    <section v-if="this.$store.state.loginState.user.permission <= 1">
      <b-field label="Create New Alert">
        <b-input type="textarea" v-model="text" />
      </b-field>
      <button v-on:click="createAlert">Submit</button>
    </section>
    <div>
      <b>Announcements</b>
      <Alert v-for="i in alerts.length" v-bind:author="alerts[alerts.length-i].author" v-bind:text="alerts[alerts.length-i].text" v-bind:timestamp="alerts[alerts.length-i].time" />
    </div>
    <!-- <Order v-for="order in orders" :key="order" v-bind="order"/> -->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Order from "@/components/Order.vue"
import Alert from "@/components/Alert.vue"

export default {
  name: "dashboard",
  components: {
    Order,
    Alert
  },
  computed: {
    getOrders() {
      //console.log(this.$store.orders);
      return this.$store.state.orders;
    }
  },
  // computed: {
  //   getOrders() {
  //     console.log("blah");
  //   }
  // },
  created() {
    // this.$store.dispatch("getOrders");
    // this.order = this.$store.state.orders;
    // console.log(this.$store.dispatch("getAlerts"));
    this.$store.dispatch("getAlerts").then((response) => {
      this.alerts = response;
    });

    // this.orders = this.computed.getOrders();
  },
  data() {
    return {
      permStr: ["Owner", "Admin", "Staff", "Error"],
      orders: [],
      alerts: [],
      text: ""
    }
  },
  methods: {
    createAlert: function(){
      this.$store.dispatch("createAlert", {text: this.text}).then((response) => {
        this.alerts.push(response);
        this.text = "";
      });
    }
  }
};
</script>

<style>
#accountInfo {
  background-color: #aaaaaa;

.manageLink{
  float:left;
  margin-left: -1px;
  margin-top: 5px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #7aa256;
  border-radius: 0;
  color: #7aa256;
  cursor: pointer;
}

.manageLink:hover {
  color: #9ad466;
}

button {
  margin-left: -1px;
  margin-top: 5px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #7aa256;
  border-radius: 0;
  color: #7aa256;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 10px;
}
li {
  display: inline-block;
  margin: 10px;
}
</style>
