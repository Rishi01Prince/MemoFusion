import express from 'express';
import user from './Users/User_Route.js';
import scrapes from './Scrape/Scrape_Route.js';
const router = express.Router();

router.use('/user', user);
router.use('/scrape', scrapes);

export default router;
