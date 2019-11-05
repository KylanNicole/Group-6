<template>
    <div>
        <img src="@/assets/paprika.jpg">
        <h4>Paprika</h4>
        <button>Edit</button>
    </div>
</template>

<script>
export default {
    name: "SpiceTile",
}
</script>

<style scoped>
div {
    width: 200px;
    border-radius: 5px;
    border-bottom: solid 1px darkgray;
    background-color: #EEEEEE;
    padding: 10px;
    margin: 5px;
    display: inline-block;
}
img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
h4 {
    font-weight: bold;
    text-align: center;
}
button {
    width: 25%;
    margin: auto;
    display: block;
}
</style>