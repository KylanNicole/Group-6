<template>
  <div class="section">
    <SearchBar/>
    <br>
    <AccountCard/>
    <AccountCard/>
    <AccountCard/>
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
  }
};
</script>
