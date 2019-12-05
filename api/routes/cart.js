import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
// import checkPermission from '../middleware/checkPermission';
import Item from '../entities/item';
import Order_ from '../entities/order';
import Order_Item from '../entities/order_item';

const router = Router();
router.route('/cart')
  .all(isAuthenticated)

  .post((req, res) => {
    
    const manager = getManager(); 

    const { address, order_items } = req.body;
    let itemPromises = order_items.map((item) => {
        let order_item = manager.create(Order_Item);
        return getRepository(Item).findOneOrFail(item.spice.id).then((spice) => {
            debugger;
            let item_weight = item.amount;
            let item_cost = spice.unit_price * item.amount;
            order_item.cost = item_cost;
            order_item.weight = item.amount;
            order_item.item = spice;
            spice.stock = spice.stock - item_weight;
            getManager().save(spice)
            return order_item;
        })
        
    })

    let totalCost = 0;
    let totalWeight = 0;
    order_items.filter(item => {
        totalWeight += item.amount;
        totalCost += item.spice.unit_price * item.amount * (1.0 - item.spice.sale);
    })

    return Promise.all(itemPromises).then((orderItems) => {
        let myOrder = manager.create(Order_); 
        myOrder.total_cost = totalCost;
        myOrder.total_weight = totalWeight;
        myOrder.address = address; 
        myOrder.order_items = orderItems;
        myOrder.user = req.user;
        myOrder.staff_id = 2; 
        myOrder.order_status = 3;
        return getManager().save(myOrder).then((savedOrder) => {
            res.send(savedOrder);
        }, ()=> {
            res.send(400);
        })

    })
});

  export default router;




//   debugger

//   let totalCost = 0; 
//   let totalWeight = 0; 
//   const manager = getManager(); 

//   const myOrder = manager.create(Order_, { total_cost : totalCost, total_weight : totalWeight, order_status: 2, staff_id : 3, address})

//   myOrder.user = req.user; 
//   manager.save(myOrder).then(() => {

//       console.log("Created an Order");
//   }, () => {
//       res.send("failed to create order")
//   })


  // // const body = {"3": {qty: 4}, "4": {qty: 5}};
  // let itemPromises = Object.keys(body).map((itemId) => {
  // return getRepository(Item).findOneOrFail(itemId).then((item) => {
  //     let orderItem = new OrderItem();
  //     orderItem.item = item;
  //     orderItem.qty = body[key].qty;
  //     return orderItem;
  // })
  // })
  // return Promise.all(itemPromises).then((orderItems) => {
  // let order = new Order();
  // order.order_items = orderItems;
  // return getManager().save(order).then((savedOrder) => {
  //     res.send(savedOrder);

  // })
  // })

//   // I save the order but order doesn't cotain id 
//   Object.keys(order_items).forEach(function(key) {
      
//       let myItem = getRepository(Item).findOneOrFail(
//           { where: { id: parseInt(key)} }
//         ).then((_foundItem) => {
//           debugger;
//           return _foundItem;
//         }, () => {
//           res.send("failed to find item");
//         });
//       // let temp = manager.create(Item);
        
//       // let myItem = getRepository(Item).findOneOrFail(parseInt(order_items[key])).then((item) => {
//       //     return item;
//       //   })
//       // myItem.then((result) => {
//       //     debugger;
//       //     console.log(result);
//       // })

//       debugger
//       const order_item = manager.create(Order_Item, { weight : order_items[key].weight })
//       debugger
//       order_items.item = myItem;
//       order_items.cost = 500; 
//       order_items.order = myOrder;
//       manager.save(order_item).then(() => {
//           debugger
//           // res.send(order_item);
//       }, () => {
//           debugger
//           res.send("failed to save order_item");
//       });

//   })

    // getRepository(order_item).findOneOrFail(
    //     { where: { userId: req.user.id, id: req.params.id } },
    //   ).then((_foundOrderItem) => {
    //     req.order_item = _foundOrderItem;
    //     next();
    //   }, () => {
    //     res.send(404);
    //   });

    // Object.keys(order_items).forEach(function(key) {


        // Grab a specific item by id ?? 
    //     getRepository(Item).findOneOrFail(
    //         { where: { id : parseInt(key)}}
    //         ).then ((found_item) =>{

    //                 totalWeight += order_items[key].weight;
    //                 totalCost += order_items[key].unit_price * order_items[key].weight; 
    //                 found_item.stock -= order_items[key].weight;
    //                 // found_item.save(); 
    //                 // how do I save this after updating its stock?

    //             } 
    //         )
    

    //     // update the stock 
    //     // const tempItem = myItem.findOne(parseInt(key)).then( () => {
    //     //     console.log("passed");
    //     // });
    //     // debugger;
        
    //     // totalCost += order_items[key].cost 
    //     // totalWeight += order_items[key].weight
    // })