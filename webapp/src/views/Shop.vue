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
            <div v-for="tag in getTags" :key="tag.id">
                <input type="checkbox" :id="tag" :value="tag.title" v-model="tags">
                <label class="tag" :for="tag">{{tag.title}}</label>
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
      },
      getTags() {
        return this.$store.state.tags;
      }
    },
    methods: {
      filterSpices(spices){
        return spices.filter( spice => {
          return !this.tags.length || this.tags.filter(tag => {
              return spice.description.toLowerCase().includes(tag) > 0
            }).length > 0
        })
      }
    },
    created(){
      this.$store.dispatch("getTags", "");
      this.$store.dispatch("getItems", "");
    },
    data() {
        return {
            filtered: false,
            filters: ["Price", "Name"],
            tags: [],
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
    background-color: #8d9b77;
    border-radius: 5px;
}
</style>
