<template>
  <div class="section">
    <div id="accountInfo">
      <p>
        Username: {{"Admin"}}<br>
        Email: {{"superrealemail@email.com"}}<br>
        Account Permissions: {{"Owner"}}<br>
      </p>
    </div>
    <hr/>
    <router-link to="manage/staff">
      <div class="manageLink">Manage Staff</div>
    </router-link><br>
    <router-link to="manage/orders">
      <div class="manageLink">Manage Orders</div>
    </router-link><br>
    <router-link to="manage/banner">
      <div class="manageLink">Manage Banners</div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "dashboard",
  components: {
  }
};
</script>

<style>
#accountInfo{
  background-color: #aaaaaa;

}
.manageLink{
  background-color: #cccccc;
  border-radius: 5px;
  /* width: 100%; */
  display: inline-block;
  padding: 4px;
  margin: 4px;
}
</style>
