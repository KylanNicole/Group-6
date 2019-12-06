<template>
    <div class="edit">
        <h1>{{title}}</h1>
        <button @click="updateSpice" >{{editText}}</button>
        <button @click="cancelUpdate" :class="{hide : hideDetails}">CANCEL</button>
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
            <p>Tag</p>
            <div class="tag" v-for="t in allTags">
                <input type="checkbox" :value="t" v-model="updatedInfo.tag"/>
                <label> {{t.title}}</label>
            </div>
            <p>New Tag</p>
            <input type="text" placeholder="New Tag" v-model="newTag"/>
            <button @click="addTag">Add Tag</button>
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
        sale: Number,
        tag: Array,
        visible: {type: Boolean, default: false}
    },
    //computed:  {},
    data() {
        return {
            editText: "UPDATE",
            hideDetails: !this.visible,
            hideWarn: true,
            updatedInfo: {
                id: this.id,
                title: this.title,
                unit_price: this.unit_price,
                stock: this.stock,
                description: this.description,
                image: this.image,
                tag: this.tag,
                sale: this.sale
            },
            newTag: null
        }
    },
    computed: {
        allTags() {
            return this.$store.state.tags;
        }
    },
    created() {
        if(this.active) {
            this.updateSpice();
        }
        this.$store.dispatch("getTags", "");
    },
    methods: {
        addTag() {
            if(this.newTag != null){
                this.$store.dispatch("addTag", this.newTag);
                this.newTag = null;
            }
        },
        updateSpice() {
            this.hideDetails = !this.hideDetails;
            this.hideWarn = true;
            this.editText = this.hideDetails ? "UPDATE" : "SAVE";
            if(this.hideDetails) {
                this.$store.dispatch("updateSpice", this.updatedInfo);
            }
            this.$emit('changed');
        },
        cancelUpdate() {
            this.hideDetails = !this.hideDetails;
            this.editText = this.hideDetails ? "UPDATE" : "SAVE";
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
    margin: 5px auto 5px auto;
    padding: 5px;
    background-color: white;
    overflow: hidden;
    width: 50%;
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
.tag {
    background-color: #8d9b77;
    border-radius: 5px;
    margin: 5px;
}
</style>
