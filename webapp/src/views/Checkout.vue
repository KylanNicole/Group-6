<template>
    <div class="back">
        <div>
            <div id="purchases">
                <h4>Your Items</h4>
                <CartTile v-for="item in cartItems" :key="item.index" :index="item.index" style="margin: auto;"/>
            </div>
            <ShippingInfo></ShippingInfo>
            <BillingInfo></BillingInfo>
            <br>
            <button v-if="cartItems.length > 0">Place Order</button>
        </div>
    </div>
</template>

<script>
import ShippingInfo from "@/components/ShippingInfo.vue"
import BillingInfo from "@/components/BillingInfo.vue"
import CartTile from "@/components/CartTile.vue"

export default {
    name: "Checkout",
    components: {
        ShippingInfo,
        BillingInfo,
        CartTile
    },
    computed: {
        cartItems() {
            return this.$store.state.cart;
        },
    },
    data() {
        return {
            colors: [{
                name: "Red",
                hex: "#FF0000"},
                {
                name: "Green",
                hex: "#00FF00"},
                {
                name: "Orange",
                hex: "#FF8888"},
                {
                name: "Yellow",
                hex: "#FFFF00"},
                {
                name: "Blue",
                hex: "#0000Ff"}]
        }
    }
}
</script>

<style scoped>
#purchases {
    width: 40%;
    margin: auto;
    background-color: white;
    padding: 10px;
    margin-top: 30px;
    border: solid 1px black;
}
button {
    margin: auto;
    display: block;
}

h4 {
    font-size: 16pt;
    text-align: center;
    border-bottom: solid 1px black;
    margin-bottom: 10px;
}

.back {
    background-color: #fbf3e4;
}
</style>