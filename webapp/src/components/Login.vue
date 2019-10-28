<template>
  <div>
    <button class="button is-primary" v-on:click="modalActive = true">Login</button>
    <b-modal :active.sync="modalActive" has-modal-card>
      Hello
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    openForm: function(){
      console.log("opening");
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
