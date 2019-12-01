<template>
    <div id="manage-spice" >
        <router-link to="/dashboard">
        <div style="float: left;">
            Back
        </div>
        </router-link>
        <button @click="hideFields = false">NEW SPICE</button>
        <div id="spice-form" :class="{hide : hideFields}">
            <img :src="newSpice.image"/>
            <h4>New Spice</h4>
            <input type="text" placeholder="Name" v-model="newSpice.title"/>
            <input type="text" placeholder="Image URL" v-model="newSpice.image"/>
            <textarea placeholder="Description" v-model="newSpice.description"/>
            <input type="text" placeholder="Unit Price" v-model="newSpice.unit_price"/>
            <input type="text" placeholder="Stock Amount" v-model="newSpice.stock"/>
            <button @click="addSpice">ADD</button>
            <button @click="clearInput">CANCEL</button>
        </div>
        <SpiceEdit v-for="spice in getSpices" :key="spice.id" v-bind="spice" v-on:changed="updateSpices"/>
    </div>
</template>

<script>
import SpiceEdit from "@/components/SpiceEdit.vue";

export default {
    name: "SpiceManage",
    components: { SpiceEdit },
    computed: {
        getSpices() {
            return this.$store.state.spices;
        }
    },
    methods: {
        addSpice() {
            this.$store.dispatch("createSpice", Object.assign({}, this.newSpice));
            this.clearInput();
            this.updateSpices();
        },
        clearInput() {
            for (var attrib in this.newSpice) {
                this.newSpice[attrib] = "";
            }
            this.hideFields = true;
        },
        updateSpices() {
            this.$store.dispatch("getItems", "");
            console.log("reloaded items");
        }
    },
    mounted() {
        this.updateSpices();
    },
    data() {
        return {
            hideFields: true,
            newSpice:  {
                title: "",
                unit_price: "",
                stock: "",
                description: "",
                image: ""
            }
        }
    }
}
</script>

<style scoped>
input {
    display: block;
}
.hide {
    display: none;
}

button {
    border: solid 1px #7aa256;
    margin: 5px;
    padding: 5px;
    background-color: white;
    text-align: center;
    color: #7aa256;
    cursor: pointer;
    width: 100%;
}

button:hover {
    color: #9ad466;
}
#manage-spice {
    width: 60%;
    margin: 30px auto;
}

#spice-form {
    width: 40%;
    margin: auto;
    
    padding: 15px;
}

img {
    float: right;
    width: 40%;
}

textarea {
    margin: 5px;
}

input {
    margin: 5px;
}
</style>