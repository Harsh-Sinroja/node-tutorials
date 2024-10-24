const express = require("express");
const User = require("./Models/userModel.model");
const connectToDB = require("./Config/db");
const Product = require("./Models/productModel.model");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const data = await User.find();
    res.send(data);
})

app.post("/", async (req, res) => {
    let {email} = req.body;
    let user = await User.findOne({email})

    if(user){
        return res.send("user Already Exist")
    }
    else{
        let data = await User.create(req.body)
        res.send(data);
    }
})

app.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    let user=await User.findOne({email,password});

    if(!user){
        return res.send("User does not exists");
    }

    if(password!=user.password){
        return res.send("Data credential does not match");
    }

    res.send("Login successfully");
})

app.put("/:id", async (req, res) => {
    let { id } = req.params;
    const data = await User.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data)
})

// app.patch("/patch/:id", async (req, res) => {
//     let { id } = req.params;
//     const data = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.send(data)
// })

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    await User.findByIdAndDelete(id, req.body);
    res.send("User deleted successfullly!");
})

app.get("/products",async(req,res)=>{
    const products = await Product.find();
    res.send(products);
})

app.post("/products",async(req,res)=>{
    let data = await Product.create(req.body)
    res.send(data);
})

app.put("/products/:id",async(req,res)=>{
    let {id} = req.params;
    let data = await Product.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
})

app.patch("/products/patch/:id",async(req,res)=>{
    let {id} = req.params;
    let data = await Product.findByIdAndUpdate(id,req.body,{new:true});
    res.send(data);
})

app.delete("/products/:id",async(req,res)=>{
    let {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.send("Product deleted successfully!");
})

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
    connectToDB();
})