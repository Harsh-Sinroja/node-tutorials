const User = require("../Models/userModel.model");

const getUser = async (req, res) => {
    let data = await User.find();
    res.send(data)
}

const createUser = async (req, res) => {
    try {
        let { email } = req.body;
        let user = await User.findOne({ email })

        if (user) {
            return res.send("user Already Exist")
        }
        else {
            let data = await User.create(req.body)
            res.send(data);
        }
    } catch (error) {
        res.send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
}

const patchUser = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        await User.findByIdAndDelete(id, req.body);
        res.send("User deleted successfullly!");
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { getUser, createUser, updateUser, patchUser, deleteUser }