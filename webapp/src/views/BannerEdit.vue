<template>
  <div style="border: solid 1px black; width: 50%; padding: 10px;">
  <!-- <button>X</button> -->
  <section>
    <h3>Banner Creation</h3>
    <!-- Color:
    <input name="banner_color" type="color">
    <br/>
    Title:
    <input name="banner_title" type="text">
    <br/>
    Description:
    <input name="banner_desc" type="text">
    <br/>
    Link:
    <input name="banner_link" type="text">
    <br/> -->
    <!-- <input name="banner_img" type="file"> -->
    <!-- <br/> -->

    <b-field label="Color">
      <input type="color"
      v-model="color"
      required
      ></input>
    </b-field>

    <b-field label="Title">
      <b-input
      v-model="title"
      placeholder="Title"
      required
      ></b-input>
    </b-field>

    <b-field label="Description">
      <b-input
      v-model="description"
      placeholder="Description"
      required
      ></b-input>
    </b-field>

    <b-field label="Link">
      <b-input
      v-model="link"
      placeholder="Link"
      required
      ></b-input>
    </b-field>


    <button v-on:click="createBanner()">Save Banner</button>
  </section>
</div>
</template>

<script>
export default {
  name: "BannerEdit",
  methods: {
    createBanner: function(){
      this.$store.dispatch("addBanner", {title: this.title, description: this.description, link: this.link, color: this.color,})
    }
  },
  data(){
    return {
      title: "",
      color: "",
      description: "",
      link: ""
    }
  }
}
</script>

<style scoped>
div {
  /* border: solid 1px black;
  width: 50%;
  padding: 10px; */
}
button{
  padding: 5px;
  background-color: rgba(0, 0, 0, 0);
  border: solid 1px #7aa256;
  border-radius: 0;
  color: #7aa256;
  cursor: pointer;
}
button:hover{
  color: #9ad466;
}
h3 {
  font-size: 20pt;
  font-weight: bold;
}
</style>
