const { Router } = require("express");
const { getProducts, createProduct, updateProduct, patchProduct, deleteProduct } = require("../Controller/product.controller");

const productRouter = Router();

productRouter.get("/all", getProducts)
productRouter.post("/createproduct", createProduct)
productRouter.put("/updateproduct", updateProduct)
productRouter.patch("/patchproduct", patchProduct)
productRouter.delete("/deleteproduct", deleteProduct)

module.exports = productRouter;