import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Tag from '../entities/tag';

const router = Router();
router.route('/tag')
  //.all(isAuthenticated)
  .get((req, res) => {
    //res.send(req.user.tag); //@@ why todos?
    // res.send("hello");
    const tagManager = getManager();
    tagManager.find(Tag).then((foundTags) => {
      res.send(foundTags);
    }, () => {
      res.sendStatus(404);
    })
  })
  .post((req, res) => {
    const { title } = req.body;
    const manager = getManager();
    const tag = manager.create(Tag, { title});
    // tag.user = req.user;
    manager.save(tag).then((savedTag) => {
      res.send(savedTag);
    });
  });


router.route('/tag/:id')
  //.all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(Tag).findOneOrFail(
      { where: { id: req.params.id } },
    ).then((_foundTag) => {
      req.tag = _foundTag;
      next();
    }, () => {
      res.send(404);
    });
  })
  .put((req, res) => {
    const foundTag = req.tag;
    const { title, item } = req.body;

    foundTag.title = title;
    foundTag.item = item;


    getManager().save(foundTag).then((updatedTag) => {
      res.send(updatedTag);
    });
  })
  .get((req, res) => {
    res.send(req.tag);
  })

  .delete((req, res) => {
    getManager().delete(Tag, req.tag.id).then(() => {
      res.send(200);
    });
  });

export default router;
