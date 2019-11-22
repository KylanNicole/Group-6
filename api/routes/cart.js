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

    getRepository(order_item).findOneOrFail(
        { where: { userId: req.user.id, id: req.params.id } },
      ).then((_foundOrderItem) => {
        req.order_item = _foundOrderItem;
        next();
      }, () => {
        res.send(404);
      });

    Object.keys(order_items).forEach(function(key) {


        // Grab a specific item by id ?? 
        getRepository(Item).findOneOrFail(
            { where: { id : parseInt(key)}}
            ).then ((found_item) =>{

                    found_item.stock -= order_items[key].weight;
                    // how do I save this after updating its stock?

                } 
            )
    

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

    // I save the order but order doesn't cotain id 

    debugger


    Object.keys(order_items).forEach(function(key) {
        const order_item = manager.create(Order_Item, { cost : order_items[key].cost, weight : order_items[key].weight, item : parseInt(key) })
        manager.save(order_item).then(() => {
            console.log("passed");


        })
    })



 
  });

  export default router;
