const {Router}=require("express");
const { login } = require("../Controller/auth.controller");

const authRouter=Router();

authRouter.get("/login",login)

module.exports=authRouter;