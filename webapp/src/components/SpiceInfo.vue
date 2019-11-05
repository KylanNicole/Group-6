<template>
    <div class="spice-info">
        <div class="desc">
            <img :src='"@/assets/" + img + ""' />
            <h4>{{name}}</h4>
            <p>
                {{desc}}
            </p>
        </div>
        <div class="purchase">
            <form>
                <p>Amount: </p>
                <input type="text" />
                <select>
                    <option default>g</option>
                    <option>oz</option>
                </select>
            <br/>
                <p>Price: $100</p>
            <br/>
                <p>Stock: </p>
                <input type="text" value="100" />
            <br/>
                <button>Add to Cart</button>
            </form>
            <br/>
                <p>Tags</p>
                <p class="tag" v-for="tag in tags">{{tag}}</p>
        </div>
        <button class="edit">Edit</button>
    </div>
</template>

<script>
export default {
    name: "SpiceInfo",
    props: {
        name: String,
        img: String,
        desc: String,
        tags: Array
    },
}
</script>

<style scoped>
img {
    width: 50%;
    height: 50%;
    margin: auto;
}
h4 {
    font-weight: bold;
}
p {
    font-size: 10pt;
}

.spice-info {
    border: solid 1px black;
    border-radius: 5px;
    padding: 10px;
    overflow: hidden;
    width: 100%;
    background-color: #F0F0F0;
}
.desc {
    float: left;
    width: 50%;
    display:inline;
    border-right: solid 1px black;
    margin-right: 15px;
}

.purchase{
    display: inline;
}

.purchase p{
    display: inline;
}
.edit {
    display:block;
}
.tag {
    background-color: lightgreen;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    margin: 0 1px;
}
</style>