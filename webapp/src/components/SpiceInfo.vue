<template>
    <div class="spice-info">
        <div class="desc">
            <img :src='image' />
            <h4>{{title}}</h4>
            <p>
                {{description}}
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
                <p>Price: $ {{unit_price}}</p>
            <br/>
                <p>Stock: </p>
                <input type="text" :value="stock" />
            <br/>
                <button @click="addToCart">Add to Cart</button>
              </form>
              <br />
              <p>Tags</p>
              <p class="tag" v-for="tag in tags">{{tag}}</p>
            </div>
            <button class="edit">Edit</button>
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
        title: String,
        image: String,
        description: String,
        stock: Number,
        unit_price: Number,
        tags: Array
    },
    methods: {
      addToCart() {
        
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