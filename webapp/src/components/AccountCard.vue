<template>
  <div>
    <div class="manageLink">
      <p>{{firstname + " " + lastname}}<br>
        {{email}}</p>
      <b-field label="Permissions">
        <b-select v-model="p">
          <option value="3">Remove Staff</option>
          <option value="2">Staff</option>
          <option value="1">Admin</option>
        </b-select>
        <button v-on:click="this.changePerms">Save</button>
      </b-field>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "account_card",
  props: {
    firstname: String,
    lastname: String,
    email: String,
    perm: Number
  },
  data(){
    return {
      p : this.perm
    };
  },
  methods: {
    changePerms: function(){
      this.$store.dispatch("updatePerm", {email: this.email, perm: this.p}).then(() => {
        this.$emit('perm-change');
      });
    }
  }
};
</script>

<style scoped>
div{
  float: bottom;
}
</style>
