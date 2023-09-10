const mongoose = require("mongoose");

exports.connectMongoose = ()=>{
    mongoose
    .connect("mongodb://127.0.0.1:27017/Registrtion")
    .then(()=> console.log('connected database'))
    .catch((err)=> console.log(err));
};

const userSchema = new mongoose.Schema({
    name:String,
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:String
});

exports.Model  = new mongoose.model("Upsc Aspirants",userSchema);