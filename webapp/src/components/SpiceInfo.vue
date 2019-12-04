<template>
    <div class="spice-info">
        <div class="desc">
            <img :src='image' />
            <h4>{{title}}</h4>
            <p>
                {{description}}
            </p>
            <p>Tags</p>
              <p class="tag" v-for="tag in tags">{{tag}}</p>
        </div>
        <div class="purchase">
            <form>
                <p>Amount: </p>
                <input type="number" v-model.number="amount" min="1" :max="stock"/>
                <select>
                  <option default>g</option>
                  <option>oz</option>
                </select>
            <br/>
                <p>{{getPrice}}</p>
            <br/>
            </form>
              <button @click="addToCart">Add to Cart</button>
            </div>
          </section>
        </section>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
    name: "SpiceInfo",
    props: {
        id: Number,
        title: String,
        image: String,
        sale: Number,
        description: String,
        stock: Number,
        unit_price: Number,
        tags: Array
    },
    computed: {
      getPrice(){
        return (this.sale > 0.0 ? "" + (this.sale * 100) + "% off!" : "") + " $" + (this.amount * this.unit_price * (1.0 - this.sale)).toFixed(2);
      }
    },
    methods: {
      addToCart() {
        if(this.amount > 0)
        {
          this.$store.dispatch("addToCart", {index: this.$store.state.cart.length,
          spice: this.$props,
          amount: this.amount});
        }
      }
    },
    data() {
      return {
        amount: 1
      }
    }
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
div {
  background-color: #fbf3e4;
}
.spice-info {
  border: solid 1px black;
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;
  width: 100%;
  background-color: #fbf3e4;
}
.desc {
  float: left;
  width: 50%;
  display: inline;
  border-right: solid 1px black;
  margin-right: 15px;
}

.purchase {
  display: inline;
}

.purchase p {
  display: inline;
}
.edit {
  display: block;
}
.tag {
  background-color: #8d9b77;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  margin: 0 1px;
}
.spice-modal-body {
  float: left;
  background: #fbf3e4;
}
.spice-modal-body section {
  width: 50%;
  float: left;
  background: #fbf3e4;
}

.noclass {
    background-color: rgb(0,0,0,0);
}
</style>
