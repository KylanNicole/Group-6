<template>
  <div>
    <div class="container">
      <img width=100%; src="../assets/background.jpg">
      <div class="top-right">
        <h1>The Spice Cabinet</h1>
      </div>

    </div>
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
import Banner from "./Banner.vue";
export default {
  name: "HelloWorld",
  components: {
    Banner
  },
  props: {
    msg: String
  },
  created(){
    this.$store.dispatch("getBanners");
  },
  data(){
    return {
      banners: [{img_link:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xyr9Zw5XAPMmiamYfxaelwHaE8%26pid%3DApi&f=1", link_to:"Shop"}, {img_link:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3ugoBJEmtsd_B-ZR31f_uwHaFj%26pid%3DApi&f=1", link_to:"Shop"}]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  color: #cc783c;
  font-size: 68px;
  margin:0px;
  text-align:center;
  font-weight: bold;
  background-color: rgba(82, 45, 26, 0.9);

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.back-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/background.jpg');
  background-size: 100%;
  z-index: -1;
}
.container {
  position: relative;
  text-align: center;
  color: #fbf3e4;

  background-image: url('../assets/background.jpg');
}
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}
</style>
