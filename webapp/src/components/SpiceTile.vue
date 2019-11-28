<template>
    <div>
        <img :src='image'>
        <h4>{{title}}</h4>
        <button>Edit</button>
        <button v-on:click="toggleDetails">Details</button>
        <div :class="[hideDetails ? 'hidden' : 'background']" v-on:click="toggleDetails">
        </div>
        <div :class="[hideDetails ? 'hidden' : 'window']" >
            <SpiceInfo class="center" v-bind="{title, image, description, stock, unit_price, tags}"/>
        </div>
    </div>
</template>

<script>
import SpiceInfo from "./SpiceInfo.vue"
export default {
    name: "SpiceTile",
    components: { SpiceInfo },
    props: {
        description: String,
        id: Number,
        image: String,
        stock: Number,
        title: String,
        unit_price: Number
    },
    methods: {
        toggleDetails() {
            this.hideDetails = !this.hideDetails;
            this.$refs.SpiceInfo.modalActive = true;
        }
    },
    data() {
        return {
            hideDetails: true,
            tags: []
        }
    }
}
</script>

<style scoped>
div {
    width: 200px;
    border-radius: 5px;
    background-color: #8d9b77;
    padding: 10px;
    margin: 5px;
    display: inline-block;
    cursor: pointer;
}
img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
h4 {
    font-weight: bold;
    text-align: center;
}
button {
    background-color: #cc783c;
    color: #fbf3e4;
    border-color: #cc783c;
    width: 100%;
    margin: 5px;
    font-weight: bold;
    display: block;
    border-radius: 10px;
}
.hidden {
    display: none;
}
.window {
    top: 10%;
    left: 25%;
    position:absolute;
    width: 50%;
    margin: auto;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
}
.center {
    display: block;
    margin: auto;
}
.background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 0;
}
</style>