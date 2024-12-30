import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;



const  UserSchema = new Schema({
    name :{
        type : String ,
        required : true
    },
    password :{
        type:String,
        required : true
    },
    location :{
        type:String,
    },
    pincode:{
        type:String,
    },
    email :{
        type:String,
        required : true
    },
    date :{
        type:Date,
        default : Date.now
    },
    picture: {
        type: String,
        required: false
    }

});
export default model('Users' , UserSchema)





