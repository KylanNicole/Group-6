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
    let totalCost = 0;
    let totalWeight = 0;

    const { address, order_items } = req.body;

    let itemPromises = Object.keys(order_items).map((itemID) => {
        return getRepository(Item).findOneOrFail(itemID).then((myItem) => {
            let order_item = manager.create(Order_Item);
            let item_weigth = order_items[itemID].weight;
            let item_cost = myItem.unit_price * item_weigth *(100 - myItem.sale)/100; 
            totalWeight += item_weigth;
            totalCost += item_cost;
            order_item.cost = item_cost;
            order_item.weight = item_weigth;
            order_item.item = myItem; 
            myItem.stock = myItem.stock - item_weigth;
            if(myItem.stock < 0){
                res.send(400); 
            }
            return getManager().save(myItem).then(()=> {
                return order_item; 
            })
        })
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


