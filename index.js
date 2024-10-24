const express = require("express");
const User = require("./Models/userModel.model");
const connectToDB = require("./Config/db");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const data = await User.find();
    res.send(data);
})

app.post("/", async (req, res) => {
    const data = await User.create(req.body);
    res.send(data);
})

app.put("/:id", async (req, res) => {
    let { id } = req.params;
    const data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data)
})

app.patch("/patch/:id", async (req, res) => {
    let { id } = req.params;
    const data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(data)
})

app.delete("/:id", async (req, res) => {
    let { id } = req.params;
    const data = await User.findByIdAndDelete(id, req.body);
    res.send(data);
})

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
    connectToDB();
})