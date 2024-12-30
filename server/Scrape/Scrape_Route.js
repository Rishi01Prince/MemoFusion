
import express from 'express';
import scrape from './Scrape.js';

const scrapes = express.Router();

scrapes
    .route('/')
    .post(scrape);


export default scrapes;