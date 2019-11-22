<template>
    <div class="order">
        <h1>Order ID: {{id}}</h1>
        <button class="action-button">Claim</button>
        <button @click="clickMethod">Details</button>
        <div :class="{hide : hideDetails}">
            <p>{{details}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Order",
    props: {
        id: Number,
        details: String
    },
    data() {
        return {
            hideDetails: true
        }
    },
    methods: {
        clickMethod() {
            this.hideDetails = !this.hideDetails;
        }
    }
}
</script>

<style scoped>
.order {
    border: solid 1px black;
}
h1 {
    display: inline;
}
button {
    float: right;
}
.hide {
    display: none;
}
</style>