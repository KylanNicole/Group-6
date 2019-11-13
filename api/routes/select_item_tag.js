import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Item from '../entities/item';


const router = Router();
router.route('/item_tag')
//   .all(isAuthenticated)
  .get((req, res) => {
    debugger
    res.send("hello world"); //@@ why todos?
  })
  
  .post((req, res) => {
    debugger
    const { itemId, tagId } = req.body;
    const manager = getManager();
    const temp = manager.create(Item.order_item, { itemId, tagId });
    // tag.user = req.user;
    manager.save(temp).then((savedTemp) => {
      res.send(savedTemp);
    });
  });



export default router;


  