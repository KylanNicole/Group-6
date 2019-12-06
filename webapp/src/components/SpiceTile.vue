<template>
    <div class="spice-tile" v-if="spice.stock > 0">
        <img :src='spice.image'>
        <h4>{{spice.title}}</h4>
        <button v-if="this.$store.state.loginState.loggedIn &&
            this.$store.state.loginState.user.permission <= 1">
            <router-link :to="{ name: 'spices', params: { spice: spice.title} }">EDIT</router-link>
        </button>
        <button v-on:click="toggleDetails">DETAILS</button>
        <div :class="[hideDetails ? 'hidden' : 'background']" v-on:click="toggleDetails">
        </div>
        <div :class="[hideDetails ? 'hidden' : 'window']" >
            <SpiceInfo class="center" v-bind:id="spice.id"/>
        </div>
    </div>
</template>

<script>
import SpiceInfo from "./SpiceInfo.vue"
export default {
    name: "SpiceTile",
    components: { SpiceInfo },
    props: {
        id: Number
    },
    computed: {
        spice: {
            get: function() {
                return this.$store.state.spices.find(spice => {
                    return (spice.id == this.$props.id)
                    });
            },
            set: function(val) {

            }
        }
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
    padding: 5px;
    cursor: pointer;
    margin: 0 auto -1px auto;
    display: block;
    width: 50%;
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
a {
    color: white;
    width: 100%;
    height: 100%;
}
</style>
