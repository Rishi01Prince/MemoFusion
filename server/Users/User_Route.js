import { Router } from 'express';
const user = Router();
// const authRoute = require("./auth");
// const passport = require('./passport');
import userMethods from './User_Methods.js';
 CreateUser, loginUser, isValidCredentials, getAllUsers  = userMethods;
// user.use(passport.initialize());
// user.use(passport.session());

user.route('/')
    .get(getAllUsers)

user
    .route('/login')
    .post(isValidCredentials, loginUser);

user
    .route('/createuser')
    .post(isValidCredentials , CreateUser);

    

// user.use('/auth' , authRoute)
// '/user/auth/google/callback'

export default user;