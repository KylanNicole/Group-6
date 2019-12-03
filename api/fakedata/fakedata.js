import { createConnection, getManager } from 'typeorm';
import User from "../entities/user.js";
import Tag from "../entities/tag.js";
import Item from "../entities/item.js";
import Order_Item from "../entities/order_item.js";
import Order from "../entities/order.js";

var faker = require('faker');
faker.seed(123);

function genCharArray(charA, charZ) {
      var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
      for (; i <= j; ++i) {
                a.push(String.fromCharCode(i));
            }
      return a;
}

function randInt(leftVal, rightVal) {
  return Math.floor(Math.random() * (1 + rightVal - leftVal) + leftVal)
}

createConnection().then(() => {
  // generating users
  var i = 0;
  var j = 0;
  for(i = 0; i < 10; i++) {
      var name = faker.name.findName().split(' ');
      let user = new User();
      user.firstname = name[0];
      user.lastname = name[1];
      user.email = `${user.firstname[0]}${user.lastname}@gmail.com`
      user.password = "some";
      if(i < 5) {
        user.permission = 2; 
      } else if(i >= 5) {
        user.permission = 1; 
      } else {
        user.permission = 0; 
      }
      getManager().save(user);
  }

  let user = new User()
  user.firstname = "Admin";
  user.lastname = "Admin";
  user.email = "Admin";
  user.password = "Admin";
  user.permission = 0;
  getManager().save(user);

  // generating tags
  var spices = ["spicy", "salty", "peppery", "red", "umami", "sweet", "brown", "italian", "fresh", "coarse"]
  var tags = [];
  for(i = 0; i < 10; i++) {
    let tag = new Tag();
    tag.title = spices[i];
    tags.push(tag);
    getManager().save(tag);
  }

  // generating items
  var alpha = genCharArray('a', 'z')
  var items = [];
  for(i = 0; i < 10; i++) {
    let item = new Item();
    item.title = "spice_" + alpha[i];
    item.unit_price = randInt(10, 20);
    item.stock = randInt(100, 500);
    item.description = "description of spice_"+alpha[i];
    item.image = "image of spice_"+alpha[i];
    items.push(item);
    var x = randInt(1, 10);
    var y = randInt(1, 10);
    while (x == y) {
      y = randInt(1, 10); 
    }
    item.tag = [tags[y]];
    getManager().save(item);
  }

  // generating order__item
  var test = new Item();
  var order_items_lst = [];
  items.push(test);
  for(i = 0; i < 3; i++) {
    var o = new Order();
    o.order_status = 0;
    o.staff_id = 7;
    o.address = "fake address";
    o.user = i+1;
    o.total_cost = 0;
    o.total_weight = 0;
    var temp_set = new Set();
    for(j = 0; j < 3; j++) {
      var oi = new Order_Item();
      oi.order = i+1;
      oi.weight = randInt(10, 20);
      o.total_weight += oi.weight;
      oi.item = randInt(1, 10);
      while(temp_set.has(oi.item)) {
        oi.item = randInt(1, 10); 
        console.log("item set");
        console.log(temp_set);
        console.log("item id");
        console.log(oi.item);
        console.log("order id");
        console.log(i);
      }
      temp_set.add(oi.item)
      oi.cost = oi.weight * items[oi.item].unit_price;
      oi.item += 1;
      o.total_cost += oi.cost;
      order_items_lst.push(oi);
    }
    getManager().save(o);
  }
  for(i = 0; i < order_items_lst.length; i++) {
    getManager().save(order_items_lst[i]);     
  }
})

