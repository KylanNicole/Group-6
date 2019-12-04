import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Item from '../entities/item';
import Tag from '../entities/tag';


const router = Router();
router.route('/item_tag')
//   .all(isAuthenticated)
  .get((req, res) => {
    debugger
    res.send("hello world"); //@@ why todos?
  })
  
  .post((req, res) => {
    // assign the tag to the given item
    debugger
    const { itemId, tagId } = req.body;
    getRepository(Item).findOneOrFail(
      {where: {id : itemId}}
    ).then((_foundItem) => {
      req.item = _foundItem;
      console.log(req.item);
    }, () => {
      res.sendStatus(404);
    });
    getRepository(Tag).findOneOrFail(
      {where: {id : tagId}}
    ).then((_foundTag) => {
      req.tag = _foundTag;
      console.log(req.tag);
    }, () => {
      res.sendStatus(404);
    });
    console.log(req.item);
    console.log(req.tag);
    res.sendStatus(200);
  });

/*
getRepository(order_item).findOneOrFail(
      { where: { userId: req.user.id, id: req.params.id } },
    ).then((_foundOrderItem) => {
      req.order_item = _foundOrderItem;
      next();
    }, () => {
      res.send(404);
    });
*/


export default router;


  