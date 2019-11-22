<template>
  <div class="container">
      <img width=100%; src="../assets/background.jpg">
      <div class="top-right">
        <h1>The Spice Cabinet</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
