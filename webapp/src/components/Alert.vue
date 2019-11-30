<template>
  <div>
    <h1>{{this.author}} {{this.timestamp}}</h1>
    <p>{{this.text}}</p>
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
  border-color: #7aa256;
  display: block;
  background-color: #fbf3e4;
  padding-bottom: 5px;
}
p{
  background-color: #fbf3e4;
}
h1{
  background-color: #cc783c;
  font-weight: bold;
  border-bottom: solid 2px #7aa256;
}
</style>
