<template>
    <div>
        <div class="filter">
            <h2>FILTERS</h2>
            <hr>
            <p>Sort By:</p>
            <select v-model="sortby">
                <option disabled value="">None</option>
                <option v-for="filter in filters">{{filter}}</option>
            </select>
            <hr>
            <p>Color:</p>
            <div v-for="color in colors">
                <input type="checkbox" :id="color.name" :value="color.name">
                <label v-bind:style="{color : color.hex}" :for="color.name">{{color.name}}</label>
            </div>
            <hr>
            <p>Tags:</p>
            <div v-for="tag in tags">
                <input type="checkbox" :id="tag" :value="tag">
                <label class="tag" :for="tag">{{tag}}</label>
            </div>
        </div>
        <div>
            <SpiceTile v-for="spice in getSpices" v-bind="spice" />
        </div>
    </div>
</template>

<script>
import SpiceTile from "@/components/SpiceTile.vue"
export default {
    name: "Shop",
    components: {
        SpiceTile
    },
    computed: {
      getSpices() {
        console.log(this.$store.state.spices);
        return this.$store.state.spices;
      }
    },
    methods: {
      getItems: function(query){
        this.$store.dispatch("getItems", query);
      }
    },
    created(){
      this.getItems("");
    },
    data() {
        return {
            filters: ["Price", "Name"],
            tags: ["Spicy", "Sweet", "Bitter", "Salty", "Umami"],
            sortby: "",
            spices: [{
              name: "hello",
              img: "",
              desc: "meep",
              tag: []
            }],
              colors: [{
                name: "Red",
                hex: "#FF0000"},
                {
                  name: "Green",
                  hex: "#00FF00"},
                  {
                    name: "Orange",
                    hex: "#FF8888"},
                    {
                      name: "Yellow",
                      hex: "#FFFF00"},
                      {
                        name: "Blue",
                        hex: "#0000Ff"}]
                      }
                    }
                  }
                  </script>

                  <style scoped>
                  .filter {
                    width: 200px;
                    height: 100%;
                    overflow: hidden;
                    padding: 15px;
                    border-right: solid 1px black;
                    float: left;
                  }
                  .tag {
                    background-color: lightgreen;
                    border-radius: 5px;
                  }
                  </style>
