const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    no:{
        type:Number
    }
})

const User = mongoose.model("User",userSchema);

module.exports= User;