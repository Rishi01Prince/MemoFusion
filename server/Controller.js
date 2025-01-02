import express from 'express';
import user from './Users/User_Route.js';
import scrapes from './Scrape/Scrape_Route.js';
import openai from './OpenAI/OpenAi_Route.js';

const router = express.Router();

router.use('/user', user);
router.use('/scrape', scrapes);
router.use('/openai', openai);

export default router;
