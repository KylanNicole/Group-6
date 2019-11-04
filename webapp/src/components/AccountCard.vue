<template>
  <div class="manageLink">
    <p>Alice Kwan</p>
    <b-field label="Permissions">
      <b-select v-model="perm">
        <option value="0">Customer</option>
        <option value="1">Staff</option>
        <option value="2">Admin</option>
      </b-select>
      <button v-on:click="changePerms()">Save</button>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "account_card",
  data(){
    return {
      perm : 0
    };
  },
  methods: {
    changePerms : function(){
      console.log("changed to " + this.perm)
    }
  }
};
</script>
