import { createConnection, getManager, getRepository} from 'typeorm';
import User from "../entities/user.js";
import Tag from "../entities/tag.js";
import Item from "../entities/item.js";
import Order_Item from "../entities/order_item.js";
import Order from "../entities/order.js";
import Announcement from "../entities/announcement.js";
import StaffAlert from "../entities/staff_alert.js";

var faker = require('faker');
faker.seed(123);
var items = [];
var write = true;
var counter = -3;

async function getTag(tagId) {
  let foundTag = getRepository(Tag).findOneOrFail(
    {where: {id: tagId}} 
  ).then((_foundTag) => {
    console.log(_foundTag);
    return _foundTag;
  }, () => {
    return null; 
  });
  let result = await foundTag;
  console.log("await has been passed")
  console.log(result);
  return result;
}

function repeatString(n, string) {
  var repeat = [];
  repeat.length = n + 1;
  return repeat.join(string);
}

function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(repeatString(2, String.fromCharCode(i))); 
  }
  return a
}

function randInt(leftVal, rightVal) {
  return Math.floor(Math.random() * (rightVal - leftVal) + leftVal)
}

function retOrderId() {
  counter += 3;
  return counter;
}

createConnection().then(() => {
  var i = 0;
  var alpha = genCharArray('a', 'z');
  var num_items = 10;
  var num_tags = 10;
  var num_users = 10;
  var num_orders = 3;
  // generate items
    // generate tags
  var spices = ["spicy", "salty", "peppery", "red", "umami", "sweet", "brown", "italian", "fresh", "coarse"]
  var saved_tags = [];
  for(i = 0; i < num_tags; i++) {
    let tag = new Tag();
    tag.title = spices[i];
    const entityManager = getManager();
    if(write) {
      saved_tags.push(entityManager.save(tag));
    }
  }

  for(i = 0; i < num_items; i++) {
    let item = new Item();
    item.title = "spice_" + alpha[i];
    item.unit_price = randInt(10, 20);
    item.stock = randInt(100, 500);
    item.description = "description of spice_"+alpha[i];
    item.image = "image of spice_"+alpha[i];
    let val = randInt(0, 9);
    items.push(item);
    if(write) {
      getManager().save(item);
    }
  }
	// person_type: 
	// * owner - 0
	// * admin - 1
	// * staff - 2
	// * customer - 3
	// email @{person_type}.com

  for(i = 0; i < num_users; i++) {
    var name = faker.name.findName().split(' ');
    let user = new User();
    user.firstname = name[0];
    user.lastname = name[1];
    user.password = "some";
    if(i < 5) {
      user.permission = 3; 
    	user.email = `${user.firstname[0]}${user.lastname}@customer.com`
    } else if(i >= 5 && i < 8) {
      user.permission = 2; 
    	user.email = `${user.firstname[0]}${user.lastname}@staff.com`
    } else {
      user.permission = 1; 
    	user.email = `${user.firstname[0]}${user.lastname}@admin.com`
    }
    if(write) {
      getManager().save(user);
    }
  }
  let user = new User()
  user.firstname = "Owner";
  user.lastname = "Owner";
  user.email = "Owner";
  user.password = "Owner";
  user.permission = 0;
  if(write) {
    getManager().save(user);
  }

  // generate announcements
  for(i = 0; i < 10; i++) {
    let a = new Announcement(); 
    a.img_link = "some img_link_" + alpha[i];
    a.link_to = "link_to_" + alpha[i];
    if(write) {
      getManager().save(a);
    }
  }
  // generate staff alerts
  for(i = 0; i < 10; i++) {
    let sa = new StaffAlert(); 
    sa.author = "author_"+alpha[i];
    sa.text = "here is some text written by author_" + alpha[i];
    if(write) {
      getManager().save(sa);
    }
  }

  var j = 0;
  var order_items_lst = [];
  var orders = [];
  for(i = 0; i < num_orders; i++) {
    var temp_lst = [];
    var o = new Order();
    o.order_status = 0;
    o.staff_id = randInt(5,8);
    o.address = "fake address";
    o.user = randInt(1, num_users);
    o.total_cost = 0;
    o.total_weight = 0;
    var temp_set = new Set();
    for(j = 0; j < 3; j++) {
      var oi = new Order_Item();
      oi.order = i+1;
      oi.weight = randInt(10, 20);
      o.total_weight += oi.weight;
      oi.item = randInt(0, num_items);
      while(temp_set.has(oi.item)) {
        oi.item = randInt(0, num_items); 
      }
      temp_set.add(oi.item)
      oi.item += 1
      oi.cost = oi.weight * items[oi.item-1].unit_price;
      o.total_cost += oi.cost;
      order_items_lst.push([i+1, oi]);
    }
    console.log(order_items_lst)
    getManager().save(o).then((savedOrder) => {
      var i = retOrderId() 
      var oi1 = order_items_lst[i][1]
      var oi2 = order_items_lst[i+1][1]
      var oi3 = order_items_lst[i+2][1]
      oi1.order = savedOrder
      oi2.order = savedOrder
      oi3.order = savedOrder
      getManager().save(oi1)
      getManager().save(oi2)
      getManager().save(oi3)
    })
  }
})
