const Product = require("../Models/productModel.model");

const getProducts = async (req, res) => {
    const products = await Productct.find();
    res.send(products);
}

const createProduct = async (req, res) => {
    try {
        let data = await Product.create(req.body)
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}

const patchProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.send("Product deleted successfully!");
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { getProducts, createProduct, updateProduct, patchProduct, deleteProduct }