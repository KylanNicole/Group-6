<template>
  <div>
    <button class="button is-primary" v-on:click="modalActive = true">Login</button>
    <b-modal :active.sync="modalActive" has-modal-card>
      <div class="modal-card" style="width:auto">
        <!-- <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header> -->
      <section class="login-modal-body">
        <section class="modal-card-body">
          <span class="has-text-danger" v-if="error">Unsuccessful logging in.</span>
          <b-field label="Email">
            <b-input
            type="email"
            v-model="email"
            placeholder="Your email"
            required
            ></b-input>
          </b-field>

          <b-field label="Password">
            <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
            required
            ></b-input>
          </b-field>
          <button class="button is-primary" v-on:click="login">Login</button>
        </section>
        <section class="modal-card-body" style="border-left: 3px solid grey">
          <span class="has-text-danger" v-if="error">Unsuccessful logging in.</span>
          <b-field label="Email">
            <b-input
            type="email"
            v-model="email"
            placeholder="Your email"
            required
            ></b-input>
          </b-field>

          <b-field label="Confirm Email">
            <b-input
            type="email"
            v-model="email"
            placeholder="Confirm Email"
            required
            ></b-input>
          </b-field>

          <b-field label="Password">
            <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
            required
            ></b-input>
          </b-field>

          <b-field label="Confirm Password">
            <b-input
            type="password"
            v-model="password"
            password-reveal
            placeholder="Confirm Password"
            required
            ></b-input>
          </b-field>
          <button class="button is-primary" v-on:click="signUp">Sign Up</button>
        </section>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" v-on:click="modalActive = false">Close</button>
      </footer>
    </div>

  </b-modal>
</div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login: function(){
      console.log("log in");
    },
    signUp: function(){
      console.log("sign up");
    }
  },
  data() {
    return {
      modalActive: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  }
};
</script>

<style>
.login-modal-body{
  float: left;
  background: #ffffff;
}
.login-modal-body section{
  width: 50%;
  float: left;
}
</style>
