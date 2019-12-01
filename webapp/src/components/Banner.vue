<template>
  <div>
    <router-link :to="link_to" style="margin: 0">
      <img :src="img_link"/>
      <br>
    </router-link>
    <br>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      hideDetails: true,
      banner_data:
      {
        img_link: "https://i0.kym-cdn.com/entries/icons/facebook/000/022/363/spicymemeee.jpg",
        link_to: "/Shop"
      }
    };
  },
  props: {
    img_link: String,
    link_to: String
  }
};
</script>

<style scoped>
div {
  width: auto;
  height: 100px;
  border-color: darkslategrey;
  border-radius: 8cm;
  display: block;
}
</style>