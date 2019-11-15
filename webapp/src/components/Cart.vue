<template>
    <div class="cart">
        <div class="header">
            <h1>My Cart</h1>
        </div>
        <div class="hide_scroll">
            <div class="content">
                <CartTile v-for="id in 5"/>
            </div>
        </div>
        <div class="footer">
            <p style="display:inline;">Total: $100</p>
            <router-link to="checkout" style="float: right; display:inline;">Go To Checkout</router-link>
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
    position: fixed;
    top: 70px;
    right: 0;
    border: solid 1px #5e5d5a;
    width: 300px;
    border-radius: 5px;
    background-color: #fdf9f2;
}
h1 {
    text-align: left;
    margin: 0;
}
.header {
    padding: 10px;
    border-bottom: solid 1px #5e5d5a;
    background-color: #fdf9f2;
}
.hide_scroll {
    overflow: hidden;
}
.content {
    width: 120%;
    overflow-y: scroll;
    height: 340px;
}
.footer {
    border-top: solid 1px #5e5d5a;
    padding: 10px;
    background-color: #fdf9f2;
}
#exit {
    float: right;
    position: relative;
}
a{
    color:#7aa256;
}
</style>