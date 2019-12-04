<template>
    <div class="carttile">
        <button style="float: right" @click="deleteItem">X</button>
        <h3 style="margin:0; color: #cc783c;">{{spice.title}}</h3>
        <img style="float: left" :src="spice.image">
        <div class="info">
            <input style="width: 50px" type="number" min="1" v-model.number="amount" :max="spice.stock">
            <select>
                <option default>g</option>
                <option>oz</option>
            </select>
            <p style="margin: 0">Price: ${{(spice.unit_price * amount * (1.0 - spice.sale)).toFixed(2)}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartTile",
    props: {
        index: Number
    },
    methods: {
        deleteItem() {
            this.$store.dispatch("deleteCartItem", this.index);
        }
    },
    computed: {
        spice() {
            return this.$store.state.cart.find(item => {
                return item.index == this.$props.index
            }).spice;
        },
        amount: {
            get: function() {
                return this.$store.state.cart.find(item => {
                    return item.index == this.$props.index
                }).amount;
            },
            set: function(val) {
                this.$store.dispatch("updateCartItem", {index: this.index, spice: this.spice, amount: val});
            }
        }
    }
    // TODO Compute the amount from the store and update according
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
