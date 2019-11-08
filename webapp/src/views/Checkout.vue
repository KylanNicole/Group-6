<template>
    <div>
        <div>
            <OrderInfo></OrderInfo>
            <CustomerInfo></CustomerInfo>
            <br>
            <b-button>Place Order</b-button>
        </div>
    </div>
</template>

<script>
import OrderInfo from "@/components/OrderInfo.vue"
import CustomerInfo from "@/components/CustomerInfo.vue"
export default {
    name: "Checkout",
    components: {
        OrderInfo,
        CustomerInfo
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