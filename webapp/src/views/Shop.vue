<template>
    <div>
        <div class="filter">
            <h2>FILTERS</h2>
            <hr>
            <p>Sort By:</p>
            <select v-model="sortby">
                <option disabled value="">None</option>
                <option v-for="filter in filters" :key="filter">{{filter}}</option>
            </select>
            <hr>
            <p>Tags:</p>
            <div v-for="tag in tags" :key="tag">
                <input type="checkbox" :id="tag" :value="tag">
                <label class="tag" :for="tag">{{tag}}</label>
            </div>
        </div>
        <div>
            <SpiceTile v-for="spice in getSpices" v-bind="spice" :key="spice.id" />
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
        return this.filterSpices(this.$store.state.spices);
      }
    },
    methods: {
      filterSpices(spices){
        return spices.filter( spice => {
          return !this.filtered || spice.description.toLowerCase().includes("christmas") > 0
        })
      }
    },
    created(){
      this.$store.dispatch("getItems", "");
      this.$store.dispatch("getTags", "");
    },
    data() {
        return {
            filtered: true,
            filters: ["Price", "Name"],
            tags: ["Spicy", "Sweet", "Bitter", "Salty", "Umami"],
            sortby: "",
            spices: [],
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
