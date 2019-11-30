<template>
  <div>
    <h1>{{this.author}} {{this.timestamp}}</h1>
    <hr/>
    <p>{{this.text}}</p>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    author: String,
    text: String,
    timestamp: String
  }
};
</script>

<style scoped>
div {
  width: auto;
  height: 100px;
  border-color: darkslategrey;
  /* border-radius: 8cm; */
  display: block;
  background-color: #cccccc;
  padding-bottom: 5px;
}
hr{
  border-top: 1px solid black;
  margin-top: 1px;
  margin-bottom: 0px
}
p{
  background-color: grey;
}
</style>
