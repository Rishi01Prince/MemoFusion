import { Router } from 'express';
import scrape from './Scrape.js';
const scrapes = Router();

scrapes
    .route('/')
    .post(scrape);


export default scrapes;