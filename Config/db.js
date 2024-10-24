const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://botbx14:temp@temp.qrov1.mongodb.net/Users?retryWrites=true&w=majority&appName=temp");
        console.log("Server is connected to MongoDB");
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = connectToDB;