<template>
<div>
  <div style="border: solid 1px black; width: 50%; padding: 10px;">
  <!-- <button>X</button> -->
  <section>
    <h3>Banner Creation</h3>
    <b-field label="Image Link">
      <b-input
      v-model="img_link"
      placeholder="Image Link"
      required
      ></b-input>
    </b-field>

    <b-field label="Link To...">
      <b-input
      v-model="link_to"
      placeholder="Link to what page"
      required
      ></b-input>
    </b-field>


    <button v-on:click="createBanner()">Save Banner</button>
  </section>
</div>
<br>
<h3> Current Banners</h3>
    <div>
      <ul v-for="b in this.$store.state.banners.length">
        <li>
          <p>{{this.$store.state.banners[0].img_link}}</p>
      <banner :img_link="b.img_link" :link_to="b.link_to"/>
      </li>
        </ul>
    </div>
</div>
</template>

<script>
import Banner from "@/components/Banner.vue"
export default {
  name: "BannerEdit",
  components: {
    Banner
  },
  methods: {
    createBanner: function(){
      this.$store.dispatch("addBanner", {img_link: this.img_link, link_to: this.link_to,})
    }
  },
  data(){
    return {
      img_link: "",
      link_to: ""
    }
  },
  created(){
    this.$store.dispatch("getBanners");
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
