<template>
    <div class="edit">
        <h1>{{title}}</h1>
        <button @click="updateSpice">{{editText}}</button>
        <button @click="deleteSpice" :class="{hide : !hideWarn}">DELETE</button>
        <div :class="{hide : hideDetails}">
            <hr/>
            <p>Name</p>
            <input type="text" v-model="updatedInfo.title"/>
            <p>Unit Price</p>
            <input type="text" v-model="updatedInfo.unit_price"/>
            <p>Sale Amount</p>
            <input type="text" v-model="updatedInfo.sale"/>
            <p>Stock Amount</p>
            <input type="text" v-model.number="updatedInfo.stock"/>
            <p>Description</p>
            <textarea v-model="updatedInfo.description"/>
            <p>Image URL</p>
            <input type="text" v-model="updatedInfo.image"/>
            <img :src="updatedInfo.image ? updatedInfo.image : image">
        </div>
        <div :class="{hide : hideWarn}">
            <hr/>
            <button @click="deleteSpice" class="alert">DELETE</button>
            <button @click="hideWarn = true">CANCEL</button>
            <p class="alert"><b>Are you <i>sure</i> you want to delete this spice? This action cannot be undone.</b></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SpiceEdit",
    props: {
        id: Number,
        title: String,
        unit_price: Number,
        stock: Number,
        description: String,
        image: String,
        sale: Number
    },
    data() {
        return {
            editText: "UPDATE",
            hideDetails: true,
            hideWarn: true,
            updatedInfo: {
                id: this.id,
                title: this.title,
                unit_price: this.unit_price,
                stock: this.stock,
                description: this.description,
                image: this.image,
                sale: this.sale
            }
        }
    },
    methods: {
        updateSpice() {
            this.hideDetails = !this.hideDetails;
            this.hideWarn = true;
            this.editText = this.hideDetails ? "UPDATE" : "SAVE";
            if(this.hideDetails) {
                this.$store.dispatch("updateSpice", this.updatedInfo);
            }
            this.$emit('changed');
        },
        deleteSpice() {
            this.hideDetails = true;
            this.editText = "UPDATE";
            if(this.hideWarn) {
                this.hideWarn = false;
            } else{
                this.$store.dispatch("deleteSpice", this.updatedInfo);
                this.hideWarn = true;
            }
            this.$emit('changed');
        }
    }
}
</script>

<style scoped>
.edit {
    border: solid 1px black;
    margin: 5px;
    padding: 5px;
    background-color: white;
    overflow: hidden;
}
h1 {
    display: inline;
}
button {
    float: right;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #7aa256;
    color: #7aa256;
    margin-left: -1px;
    padding: 5px;
    cursor: pointer;

}
button:hover {
    color: #9ad466;
}

.hide {
    display: none;
}
img {
    display: block;
    width: 100px;
}
.alert {
    color: red;
    display: block;
}
</style>
