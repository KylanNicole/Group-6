<template>
  <div v-if="this.$store.dispatch('authorized', 0)" class="section">
    <!-- <SearchBar/> -->
    <router-link to="/dashboard">
      <div class="manageLink">
        Back
      </div>
    </router-link>
    <br>
    <b-field label="Add Staff Member">
      <br>
      <b-input
      type="email"
      v-model="newStaff"
      placeholder="Staff Email"
      ></b-input>
          <button v-on:click="addStaff">Add</button>
    </b-field>
    <template v-for="account in accounts">
      <AccountCard v-on:perm-change="getAccounts()" v-if="account.permission > 0 && account.permission < 3" v-bind:email="account.email" v-bind:firstname="account.firstname" v-bind:lastname="account.lastname" v-bind:perm="account.permission" />
      </template>
      <!-- <AccountCard firstname="Alice" lastname="Kwan" email="email@email.com" v-bind:perm="2" /> -->
      <!-- <AccountCard/>
      <AccountCard/> -->
      <br>
    </div>
  </template>

  <script>
  // @ is an alias to /src
  import SearchBar from "@/components/SearchBar.vue";
  import AccountCard from "@/components/AccountCard.vue";

  export default {
    name: "staff",
    components: {
      SearchBar,
      AccountCard
    },
    methods: {
      getAccounts: function(){
        return this.$store.dispatch("getAccounts").then((response) => {
          this.accounts = response;
          this.$forceUpdate();
        });
      },
      addStaff: function(){
        this.$store.dispatch("updatePerm", {email: this.newStaff, perm: 2}).then(() => {
          this.getAccounts();
        });
      }
    },
    data(){
      return {
        accounts : [],
        newStaff : ""
      }
    },
    created(){
      this.getAccounts();
    }
  };
  </script>
