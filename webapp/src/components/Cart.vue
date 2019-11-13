<template>
    <div class="cart">
        <div class="header">
            <button id="exit">X</button>
            <h1>My Cart</h1>
        </div>
        <CartTile v-for="id in 5"/>
        <div class="footer">
            <router-link to="checkout" style="float: left">Go To Checkout</router-link>
            <p style="text-align: right; display: inline;">Total: $100</p>
        </div>
    </div>
</template>

<script>
import CartTile from "./CartTile.vue"
export default {
    name: "Cart",
    components: { CartTile }
}
</script>

<style scoped>
.cart {
    top: 0;
    position: sticky;
    float: right;
    border: solid 1px black;
    width: 300px;
    border-radius: 5px;
}
h1 {
    text-align: left;
    margin: 0;
}
.header {
    padding: 10px;
    border-bottom: solid 1px black;
    margin-bottom: 10px;
}
.footer {
    border-top: solid 1px black;
    padding: 10px;
    margin-top: 10px;
}
#exit {
    float: right;
    position: relative;
}
</style>