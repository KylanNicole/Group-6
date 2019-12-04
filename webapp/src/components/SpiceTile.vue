<template>
    <div class="spice-tile" v-on:click="toggleDetails">
        <img :src='image'>
        <h4>{{title}}</h4>
        <router-link to="Spices" v-if="this.$store.state.loginState.loggedIn &&
        this.$store.state.loginState.user.permission <= 1">
            <button>EDIT</button>
        </router-link>
        <button v-on:click="toggleDetails">DETAILS</button>
        <div :class="[hideDetails ? 'hidden' : 'background']" v-on:click="toggleDetails">
        </div>
        <div :class="[hideDetails ? 'hidden' : 'window']" >
            <SpiceInfo class="center" v-bind="$props"/>
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
        sale: Number,
        stock: Number,
        title: String,
        unit_price: Number,
        visible: {type: Boolean, default: false}
    },
    methods: {
        toggleDetails() {
            this.hideDetails = !this.hideDetails;
            //this.$refs.SpiceInfo.modalActive = true;
        }
    },
    data() {
        return {
            hideDetails: !this.visible,
            tags: []
        }
    }
}
</script>

<style scoped>
.spice-tile {
    width: 200px;
    border-radius: 5px;
    background-color: #8d9b77;
    padding: 10px;
    margin: 5px;
    display: inline-block;
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
    background-color: transparent;
    color: #fbf3e4;
    border: solid 1px #cc783c;
    margin: 5px 0px 5px -1px;
    padding: 5px;
    cursor: pointer;
    margin: auto;
    display: block;
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
