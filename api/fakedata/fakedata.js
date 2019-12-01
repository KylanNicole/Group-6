import { createConnection, getManager } from 'typeorm';
import User from "../entities/user.js";

createConnection().then(() => { 
    let user = new User();
    user.email ="foo@foo.com";
    user.password = "foo";
    getManager().save(user);
})
