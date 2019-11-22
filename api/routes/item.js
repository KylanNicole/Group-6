import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
// import checkPermission from '../middleware/checkPermission';
import Item from '../entities/item';

const router = Router();
router.route('/item')
  // .all(isAuthenticated)
  .get((req, res) => {
    const itemManager = getManager(); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    itemManager.find(Item).then((_foundAllItem) => {
      res.send(_foundAllItem);
      }, () => {
      res.send(404);
    })
  })
  .post((req, res) => {
    const { title, unit_price, stock, description, image, order_item, tag } = req.body;

    const manager = getManager();
    const item = manager.create(Item, { title, unit_price, stock, description, image, order_item, tag });
    
    //item.user = req.user;

    
    manager.save(item).then((savedItem) => {
      res.send(savedItem);
    });
  });

  
router.route('/item/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(Item).findOneOrFail(
      { where: { id: req.params.id } },
    ).then((_foundItem) => {
      req.item = _foundItem;
      next();
    }, () => {
      res.send(404);
    });
  })


  .put((req, res) => {
    const foundItem = req.item;
    const {title, unit_price, stock, description, image, order_item, tag  } = req.body;
    
    foundItem.title = title;
    foundItem.unit_price = unit_price;
    foundItem.stock = stock; 
    foundItem.description = description;
    foundItem.image = image; 
    foundItem.order_item = order_item; 
    foundItem.tag = tag; 


    getManager().save(foundItem).then((updatedItem) => {
      res.send(updatedItem);
    });
  })
  .get((req, res) => {
    res.send(req.item);
  })
  .delete((req, res) => {
    getManager().delete(Item, req.item.id).then(() => {
      res.send(200);
    });
  });

export default router;
