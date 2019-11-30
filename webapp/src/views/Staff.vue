<template>
  <div v-if="this.$store.dispatch('authorized', 0)" class="section">
    <SearchBar/>
    <br>
    <template v-for="account in accounts">
      <AccountCard v-if="account.permission > 0" v-bind:email="account.email" v-bind:firstname="account.firstname" v-bind:lastname="account.lastname" v-bind:perm="account.permission" />
    </template>
    <!-- <AccountCard firstname="Alice" lastname="Kwan" email="email@email.com" v-bind:perm="2" /> -->
    <!-- <AccountCard/>
    <AccountCard/> -->
    <br>
    <router-link to="/dashboard">
      <div class="manageLink">
        Back
      </div>
    </router-link>
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
      });
    }
  },
  data(){
    return {
      accounts : []
    }
  },
  created(){
    this.getAccounts();
  }
};
</script>

<style scoped>
#accountInfo{
  background: #6e795d;
  border-radius: 5px;
  color: #eeeeee;
  font-weight: bold;
  font-size: 18pt;
}

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