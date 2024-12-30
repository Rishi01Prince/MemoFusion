import { set, connect as _connect } from 'mongoose';
import dotenv from  'dotenv';
dotenv.config({path : './config.env'})

set('strictQuery', true);

const x = process.env.DATABASE_USERNAME;

const mongoURI = process.env.DATABASE.replace('<DATABASE_USERNAME>' , process.env.DATABASE_USERNAME).replace('<DATABASE_PASSWORD>' , process.env.DATABASE_PASSWORD);

const mongoDB = async () => {
    await _connect(mongoURI, {
        useNewUrlParser: true,
        // useCreateIndex: true, 
        // useFindAndModify: false,
    }, connect);
};


const connect = async (err, result) => {

    if (err) console.log("---" + err)
    else {
        console.log("connected to mongo")
    }
}


export default mongoDB();
