<template>
    <!-- <div :style="background-color:'banner_data.color'"> -->
        <div>
        <div>
        <b-button>Delete Me</b-button>
        <router-link :to="banner_data.link_to" style="margin: 0">
            <img :src="banner_data.img_link"/>
        </router-link>
        </div>
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
  }
};
</script>

<style scoped>
div {
    width: auto;
    height: 100px;
    border-color: darkslategrey;
    border-radius: 8cm;
}
.BigBanner {
    background-color: #8d9b77; 
}
</style>