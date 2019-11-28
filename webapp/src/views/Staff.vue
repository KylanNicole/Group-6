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
    this.getAccounts().then(() => {
      console.log(this.accounts[0].email);
    });
  }
};
</script>
