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
.carttile {
    background-color: #EEEEEE;
    width: 80%;
    margin: 0 auto 10px;
    display: block;
    padding: 5px;
    overflow: auto;
    border-bottom: solid 1px black;
    border-radius: 5px;
}
.info {
    text-align: left;
}
img {
    width: 50px;
    display: inline;
    //margin: 0 30px 0 10px;
}
</style>