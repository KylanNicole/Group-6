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
    const { address , order_items } = req.body;

    debugger

    let totalCost = 0; 
    let totalWeight = 0; 
    const manager = getManager(); 
    const myItem  = getRepository(Item)

    Object.keys(order_items).forEach(function(key) {

        // update the stock 
        const tempItem = myItem.findOne(parseInt(key)).then( () => {
            console.log("passed");
        });
        debugger;
        
        totalCost += order_items[key].cost 
        totalWeight += order_items[key].weight
    })


    const order = manager.create(Order_, { total_cost : totalCost, total_weight : totalWeight, order_status: 2, staff_id : 3, address})

    order.user = req.user; 
    manager.save(order).then(() => {

        console.log("passed");
    })

    debugger


    Object.keys(order_items).forEach(function(key) {
        const order_item = manager.create(Order_Item, { cost : order_items[key].cost, weight : order_items[key].weight, item : parseInt(key) })
        manager.save(order_item).then(() => {
            console.log("passed");


        })
    })



 
  });

  export default router;
