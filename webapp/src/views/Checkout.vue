<template>
    <div>
        <div>
            <CartTile></CartTile>
            <ShippingInfo></ShippingInfo>
            <br>
            <b-button>Place Order</b-button>
        </div>
    </div>
</template>

<script>
import CustomerInfo from "@/components/CustomerInfo.vue"
import ShippingInfo from "@/components/ShippingInfo.vue"
import CartTile from "@/components/CartTile.vue"

export default {
    name: "Checkout",
    components: {
        CustomerInfo,
        ShippingInfo,
        CartTile
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
</style>