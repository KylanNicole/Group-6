<template>
    <div class="carttile">
        <button style="float: right">X</button>
        <h3 style="margin: 0">Spice Name</h3>
        <img style="float: left" src="@/assets/logo.png">
        <div class="info">
            <input style="width: 50px" type="text">
            <select>
                <option default>g</option>
                <option>oz</option>
            </select>
            <p>Price: $10</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartTile"
}
</script>

<style scoped>
.carttile {
    background-color: #EEEEEE;
    width: 80%;
    margin: auto;
    display: block;
    padding: 5px 0 5px 0;
    overflow: auto;
}
.info {
    float: right;
    text-align: right;
}
img {
    width: 50px;
    display: inline;
}
</style>