<template>
  <div>
    <div class="filter">
      <h2>FILTERS</h2>
      <b-field label="Search">
        <b-input v-model="search" />
      </b-field>
      <hr>
      <p>Sort By:</p>
      <select v-model="sortby">
        <option v-for="filter in filters" :key="filter.id" :value="filter.id">{{filter.name}}</option>
      </select>
      <hr>
      <p>Tags:</p>
      <input type="checkbox" v-model="sale">
      <label class="tag" for="tag">Sale</label>
      <div v-for="tag in getTags" :key="tag.id">
        <input type="checkbox" :id="tag" :value="tag.title" v-model="tags">
        <label class="tag" :for="tag">{{tag.title.charAt(0).toUpperCase() + tag.title.slice(1).toLowerCase()}}</label>
      </div>
    </div>
    <div>
      <b-loading :is-full-page="false" :active.sync="spicesLoading" style="z-index: 1;" />
      <SpiceTile v-for="spice in getSpices" v-bind="spice" :key="spice.id" v-bind:visible="$route.params.item == spice.title" v-if="spice.stock > 0"/>
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
    props: {
      itags: {type: Array, default: function() {return []}},
      isale: {type: Boolean, default: function() {return false}}
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
          return (!this.sale || spice.sale > 0) && (!this.tags.length || this.tags.filter(tag => {
            return spice.tags.find(t => {
              return t.title == tag
            })
          }).length > 0) && (spice.title.toLowerCase().includes(this.search.toLowerCase()) ||
          spice.description.toLowerCase().includes(this.search.toLowerCase()) ||
          spice.tags.filter(tag => {
            return tag.title.includes(this.search.toLowerCase())
          }).length > 0);
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
      this.spicesLoading = true;
      this.$store.dispatch("getTags", "");
      this.$store.dispatch("getItems", "").then(() => {
        this.spicesLoading = false;
      });
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
        tags: this.itags,
        sale: this.isale,
        sortby: 0,
        spices: [],
        search: "",
        spicesLoading: false
      }
    }
  }

  </script>

  <style scoped>
  .filter {
    width: 200px;
    height: 500px;
    overflow-y: scroll;
    padding: 15px;
    border-right: solid 1px black;
    float: left;
  }
  .tag {
    background-color: #fbf3e4;
    border-radius: 5px;
    font-size: 10pt;
  }
  p {
    font-size: 14pt;
  }
  hr{
    background-color: #9ad466;
  }
  </style>
