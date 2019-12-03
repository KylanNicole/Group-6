import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
// import checkPermission from '../middleware/checkPermission';
import Announcement from '../entities/announcement';
import Item from '../entities/item';
import Tag from '../entities/tag';



const router = Router();
router.route('/item_tag_1')
  .all(isAuthenticated)


  .post((req, res) => {
    const { selection } = req.body;
    // const manager = getManager();

    let selected_item = Object.keys(selection)[0];
    let tags_list = selection[selected_item];


    let item_entiy = getRepository(Item).findOneOrFail(parseInt(selected_item)).then((item) => {
        return item;
    }, () =>
    {
        res.send("couldn't find the item");
    })

    // debugger;


    let tag_entities = tags_list.map((tagID) => { 
        // debugger;
        return getRepository(Tag).findOneOrFail(tagID).then((tag) => {
            return tag
        }, () => {
            res.send("couldn't find Tag entity")
        })
    });

    return Promise.all(tag_entities).then((tagEntites) => {
        debugger;
        item_entiy.Tags = tagEntites;
        return getManager().save(item_entiy).then((savedItem) => {
          res.send(savedItem);
      
        }, () => {
            res.send("couldn't save item");
        })
    })

});




export default router;
