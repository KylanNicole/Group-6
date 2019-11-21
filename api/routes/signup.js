import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import User from '../entities/user';

const router = Router();
router.route('/signup')
//   .all(isAuthenticated)
  .get((req, res) => {
    res.send("guccimate"); //@@ why todos?
  })


  .post((req, res) => {
    const { firstname, lastname, email, password } = req.body;
    console.log(firstname);
    const manager = getManager();
    const user = manager.create(User, { firstname, lastname, permission : 3, email, password });
    // tag.user = req.user;
    manager.save(user).then((savedUser) => {
      res.send(savedUser);
    });
  });


router.route('/signup/:id')
    .all((req, res, next) => {
      getRepository(User).findOneOrFail(
          { where: {id: req.params.id} },
      ).then((_foundUser) => {
          req.user = _foundUser;
          next();
      }, () => {
          res.send(404);
      });

  })



  .put((req, res) => {
    const foundUser = req.user;
    const {  firstname, lastname, credit_card_number, email, password, address } = req.body;

    foundUser.firstname = firstname;
    foundUser.lastname = lastname;
    foundUser.credit_card_number = credit_card_number;
    foundUser.email = email;
    foundUser.password = password;
    foundUser.address = address;


    getManager().save(foundUser).then((updatedUser) => {
      res.send(updatedUser);
    });
  })
//   .get((req, res) => {
//     res.send(req.tag);
//   })
  .delete((req, res) => {
    getManager().delete(User, req.user.id).then(() => {
      res.send(200);
    });
  });

export default router;
