<template>
    <div class="carttile">
        <b-button style="float: right">X</b-button>
        <h3 style="margin:0; color: #cc783c;">Spice Name</h3>
        <img style="float: left" src="@/assets/logo.png">
        <div class="info">
            <input style="width: 50px" type="text">
            <select>
                <option default>g</option>
                <option>oz</option>
            </select>
            <p style="margin: 0">Price: $10</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartTile"
}
</script>

<style scoped>
h3{
    color: #cc783c;
    margin:0;
}
.carttile {
    background-color: #fbf3e4;
    width: 80%;
    margin: 10px;
    display: block;
    padding: 5px;
    overflow: auto;
    border-bottom: solid 1px #5e5d5a;
    border-radius: 5px;
    color: #cc783c;
}
.info {
    text-align: left;
}
img {
    width: 50px;
    display: inline;
}
</style>