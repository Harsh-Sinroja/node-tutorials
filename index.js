const express = require("express");
const connectToDB = require("./Config/db");
const userRouter = require("./Routers/user.router");
const productRouter = require("./Routers/product.router");
const authRouter = require("./Routers/auth.router");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/user",userRouter)
app.use("/products",productRouter)
app.use("/auth",authRouter)

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
    connectToDB();
})