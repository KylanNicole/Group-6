<template>
  <div>
    <b-modal :active.sync="modalActive" has-modal-card trap-focus>
      <div class="modal-card" style="width:auto">
        <section class="login-modal-body">
          <section class="modal-card-body">
            <div>
              <span class="has-text-danger" v-if="error">Unsuccessful logging in.</span>
              <p>
                <b>Existing Login</b>
              </p>
              <b-field label="Email">
                <b-input type="email" v-model="email" placeholder="Your email" required></b-input>
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
            </div>
            <button v-on:click="login">Login</button>
          </section>

          <section class="modal-card-body" style="border-left: 3px solid grey">
            <p>
              <b>New User Signup</b>
            </p>

            <b-field label="First Name">
              <b-input v-model="firstname" placeholder="John" required></b-input>
            </b-field>

            <b-field label="Last Name">
              <b-input v-model="lastname" placeholder="Smith" required></b-input>
            </b-field>

            <b-field label="Email">
              <b-input type="email" v-model="email" placeholder="Your email" required></b-input>
            </b-field>

            <b-field label="Confirm Email">
              <b-input type="email" v-model="emailConf" placeholder="Confirm Email" required></b-input>
            </b-field>
            <span class="has-text-danger" v-if="email != emailConf">Emails do not match</span>

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
              <span class="has-text-danger" v-if="password != passwordConf">Passwords do not match</span>
            </b-field>
          </section>
        </section>
      </div>
      <button v-on:click="signUp">Sign Up</button>

      <div>
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
    login: function() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(
          () => {
            this.modalActive = false;
          },
          () => {
            this.error = true;
          }
        );
    },
    signUp: function() {
      this.error = false;
      if (this.email == this.emailConf && this.password == this.passwordConf) {
        this.$store
          .dispatch("signup", {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password
          })
          .then(
            () => {
              this.modalActive = false;
            },
            () => {
              this.error = true;
            }
          );
      }
    }
  },
  data() {
    return {
      modalActive: false,
      firstname: "",
      lastname: "",
      email: "",
      emailConf: "",
      password: "",
      passwordConf: "",
      error: false
    };
  }
};
</script>

<style scoped>
div {
  float: left;
  background: #fbf3e4;
}
.login-modal-body {
  float: left;
  background: #fbf3e4;
}
.login-modal-body section {
  width: 50%;
  float: left;
  background: #fbf3e4;
}
.login-modal-foot {
  background: #8d9b77;
}
footer {
  background: #8d9b77;
}

section button {
  margin-top: 10px;
}
</style>
