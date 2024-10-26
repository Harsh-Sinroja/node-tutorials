const { Router } = require("express");
const { getUser, createUser, updateUser, patchUser, deleteUser } = require("../Controller/user.controller");

const userRouter = Router()


userRouter.get("/all", getUser)
userRouter.post("/create", createUser)
userRouter.put("/update", updateUser)
userRouter.patch("/patch", patchUser)
userRouter.delete("/delete", deleteUser)

module.exports = userRouter;