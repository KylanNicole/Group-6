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
      <ul v-for="b in banners.length">
        <li>
      <banner v-bind:img_link="banners[banners.length-b].img_link" v-bind:link_to="banners[banners.length-b].link_to"/>
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
      link_to: "",
      banners: [{img_link:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xyr9Zw5XAPMmiamYfxaelwHaE8%26pid%3DApi&f=1", link_to:"Shop"}, {img_link:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3ugoBJEmtsd_B-ZR31f_uwHaFj%26pid%3DApi&f=1", link_to:"Shop"}]
    }
  },
  // created(){
  //   this.$store.dispatch("getBanners").then((response) => {
  //     this.banners = response;
  //   });
  // }
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
