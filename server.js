const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const {connectMongoose,Model} = require("./database");

const app = express();

connectMongoose();

app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/register",async(req,res)=>{
    const existuser = await Model.findOne({username:req.body.username});
    if(existuser){ 
        res.sendFile(path.join(__dirname+"/file.html"));
    }
    else{
         Model.create({
            name:req.body.name,
            
            username:req.body.username,
            password:req.body.password,
        })
        res.send(`<h1>Thanks Mr ${req.body.name} for registered with us</h1>`);
    }

});


app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`);
})