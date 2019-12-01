import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuth from '../middleware/isAuthenticated';
import User from '../entities/user';

export default (passport) => {
  const router = Router();
  router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status('400').send({ user, msg: 'Cannot log in', info });
      }
      return req.login(user, () => res.send(user));
    })(req, res, next);
  });
  router.get('/logout', (req, res) => {
    req.logout();
    return res.send();
  });
  router.get('/checkLogin', isAuth, (req, res) => {
    res.send(req.user);
  });
  router.put('/updatePerm', isAuth, (req, res) => {
    if (req.user.permission == 0){
      const {email, perm} = req.body;
      const foundUser = getRepository(User)
      .findOneOrFail(
        { where: { email: email } },
      ).then((foundUser) => {
        foundUser.permission = perm;

        getManager().save(foundUser).then((updatedUser) => {
          res.send(updatedUser);
        });
      }, () => {
        res.send(404);
      });

    }else {
      res.sendStatus(401);
    }
  });
  router.get('/users', isAuth, (req, res) => {
    if (req.user.permission == 0){
      const userManager = getManager(); // you can also get it via getConnection().getRepository() or getManager().getRepository()
      userManager.find(User).then((foundUsers) => {
        var limitedUsers = [];
        var u;
        for (u in foundUsers) {
          limitedUsers.push({firstname: foundUsers[u].firstname, lastname: foundUsers[u].lastname, email: foundUsers[u].email, permission: foundUsers[u].permission});
        }
        res.send(limitedUsers);
      }, () => {
        res.send(404);
      });
    } else{
      res.sendStatus(401);
    }
  });
  return router;
};
