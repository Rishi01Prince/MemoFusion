import dotenv from  'dotenv';
import app from './app.js';

dotenv.config({path : './config.env'})
const port = process.env.port | 5000 ;

const x = process.env.DATABASE_USERNAME;
console.log(x+ "x");






app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

