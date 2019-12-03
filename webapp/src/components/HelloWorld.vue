<template>
  <div>
    <div class="container">
      <img width=100%; src="../assets/background.jpg">
      <div class="top-right">
        <h1>The Spice Cabinet</h1>
      </div>

      <!-- <Banner img_link="https://i0.kym-cdn.com/entries/icons/facebook/000/022/363/spicymemeee.jpg" link_to="/Shop"/> -->
    </div>
    <!-- <div display:block>
    <template v-for="b in this.$store.state.banners">
      <div display:block>
      <banner :img_link="b.img_link" :link_to="b.link_to"/>
      </div>
    </template>
    </div> -->
    <div>
      <ul>
        <li v-for="b in this.$store.state.banners">
      <banner :img_link="b.img_link" :link_to="b.link_to"/>
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
