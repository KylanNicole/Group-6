<template>
    <div>
        <div class="filter">
            <h2>FILTERS</h2>
            <hr>
            <p>Sort By:</p>
            <select v-model="sortby">
                <option v-for="filter in filters" :key="filter.id" :value="filter.id">{{filter.name}}</option>
            </select>
            <hr>
            <p>Tags:</p>
            <div v-for="tag in getTags" :key="tag.id">
                <input type="checkbox" :id="tag" :value="tag.title" v-model="tags">
                <label class="tag" :for="tag">{{tag.title}}</label>
            </div>
        </div>
        <div>
            <SpiceTile v-for="spice in getSpices" v-bind="spice" :key="spice.id" v-if="spice.stock > 0"/>
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
        var filtered = this.filterSpices(this.$store.state.spices);
        if(this.sortby == 0) {
          filtered = filtered.sort(this.alphaSortAscend);
        } else if (this.sortby == 1) {
          filtered = filtered.sort(this.alphaSortDescend);
        } else if (this.sortby == 2) {
          filtered = filtered.sort(this.priceSortAscend);
        } else if (this.sortby == 3) {
          filtered = filtered.sort(this.priceSortDescend);
        }
        return filtered;
      },
      getTags() {
        return this.$store.state.tags;
      },
      selectedTags() {
        return [this.$route.params.tag];
      }
    },
    methods: {
      filterSpices(spices){
        return spices.filter( spice => {
          return !this.tags.length || this.tags.filter(tag => {
              return spice.description.toLowerCase().includes(tag) > 0
            }).length == this.tags.length
        })
      },
      priceSortAscend:function(a, b) {
        if(a.unit_price < b.unit_price) {
          return -1;
        }
        return 1;
      },
      priceSortDescend:function(a, b) {
        if(a.unit_price > b.unit_price) {
          return -1;
        }
        return 1;
      },
      alphaSortAscend:function(a, b) {
        if(a.title  < b.title) {
          return -1;
        }
        return 1;
      },
      alphaSortDescend:function(a, b) {
        if(a.title > b.title) {
          return -1;
        }
        return 1;
      }
    },
    created(){
      this.$store.dispatch("getTags", "");
      this.$store.dispatch("getItems", "");
    },
    data() {
        return {
            filtered: false,
            filters: [
              {id: 0, name: "Name (A-Z)"},
              {id: 1, name: "Name (Z-A)"},
              {id: 2, name: "Price (Low-High)"},
              {id: 3, name: "Price (High-Low)"}
            ],
            tags: [],
            sortby: 0,
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
