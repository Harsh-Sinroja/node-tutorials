const User = require("../Models/userModel.model");

const login =async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await Userr.findOne({ email });

        if (!user) {
            return res.send("User does not exists");
        }

        if (password != user.password) {
            return res.send("Data credential does not match");
        }

        res.send("Login successfully");
    } catch (error) {
        res.send(error.message);
    }
}

module.exports={login}