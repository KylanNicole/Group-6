<template>
  <div>
    <b-modal :active.sync="modalActive" has-modal-card>
      <div class="modal-card" style="width:auto">
        <!-- <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header> -->
      <section class="login-modal-body">
        <section class="modal-card-body">
          <span class="has-text-danger" v-if="error">Unsuccessful logging in.</span>
          <p><b>Existing Login</b></p>
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
          <!--<button v-on:click="login">Login</button>-->
        </section>

        <section class="modal-card-body" style="border-left: 3px solid grey">
          <span class="has-text-danger" v-if="error">Unsuccessful logging in.</span>
          <p><b>New User Signup</b></p>
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
            v-model="emailConf"
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
            v-model="passwordConf"
            password-reveal
            placeholder="Confirm Password"
            required
            ></b-input>
          </b-field>
          <button v-on:click="signUp">Sign Up</button>
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
      this.$store.dispatch("login", {email: this.email, password: this.password});
    },
    signUp: function(){
      if (this.email == this.emailConf && this.password == this.passwordConf){
        this.$store.dispatch("signup", {firstname: "Bill", lastname: "Hader", email: this.email, password: this.password} );
      }
    }
  },
  data() {
    return {
      modalActive: false,
      email: "",
      emailConf: "",
      password: "",
      passwordConf: "",
      error: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  }
};
</script>

<style scoped>
div{
  float: left;
  background: #fbf3e4;
}
.login-modal-body{
  float: left;
  background: #fbf3e4;
}
.login-modal-body section{
  width: 50%;
  float: left;
  background: #fbf3e4;
}
.login-modal-foot{
  background: #8d9b77;
}
footer {
  background: #8d9b77;
}
</style>
