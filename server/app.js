import express, { json } from 'express';
const app = express();
import db from './db.js';

import morgan from 'morgan';
import cors from "cors";

import cookieSession from "cookie-session";
import routes from './Controller.js'; 

app.use(json());
app.use(morgan('dev'));

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);


app.use(
  cors({
    origin: '*',
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use('/', routes); 

app.get('/', (req, res) => {
  res.send('You are successfully connected to the app!');
});

export default app;
