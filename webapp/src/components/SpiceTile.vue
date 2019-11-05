<template>
    <div>
        <img :src='"@/assets/" + img + ""'>
        <h4>{{name}}</h4>
        <button>Edit</button>
        <button v-on:click="toggleDetails">Details</button>
        <div :class="[hideDetails ? 'hidden' : 'background']" v-on:click="toggleDetails">
        </div>
        <div :class="[hideDetails ? 'hidden' : 'window']" >
            <SpiceInfo class="center" v-bind="{name, img, desc, tags}"/>
        </div>
        
    </div>
</template>

<script>
import SpiceInfo from "./SpiceInfo.vue"
export default {
    name: "SpiceTile",
    components: { SpiceInfo },
    props: {
        name: String,
        img: String,
        desc: String,
        tags: Array
    },
    methods: {
        toggleDetails() {
            this.hideDetails = !this.hideDetails;
        }
    },
    data() {
        return {
            hideDetails: true,
        }
    }
}
</script>

<style scoped>
div {
    width: 200px;
    border-radius: 5px;
    border-bottom: solid 1px darkgray;
    background-color: #EEEEEE;
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
    width: 25%;
    margin: auto;
    display: block;
}
.hidden {
    display: none;
}
.window {
    top: 0;
    left: 0;
    position:absolute;
    width: 50%;
    margin: auto;
    padding: 10% 0 0 0;
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