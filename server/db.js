const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const mongoURI = process.env.DATABASE.replace('<DATABASE_USERNAME>' , process.env.DATABASE_USERNAME).replace('<DATABASE_PASSWORD>' , process.env.DATABASE_PASSWORD);

const mongoDB = async () => {
    await mongoose.connect(mongoURI, {
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


module.exports = mongoDB();
