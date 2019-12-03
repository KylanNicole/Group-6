<template>
    <div class="back">
        <div>
            <div id="purchases">
                <CartTile v-for="item in cartItems" :index="item.index" style="margin: auto;"/>
            </div>
            <ShippingInfo></ShippingInfo>
            <BillingInfo></BillingInfo>
            <br>
            <b-button>Place Order</b-button>
        </div>
    </div>
</template>

<script>
import CustomerInfo from "@/components/CustomerInfo.vue"
import ShippingInfo from "@/components/ShippingInfo.vue"
import BillingInfo from "@/components/BillingInfo.vue"
import CartTile from "@/components/CartTile.vue"

export default {
    name: "Checkout",
    components: {
        CustomerInfo,
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

.back {
    background-color: #fbf3e4;
}
</style>