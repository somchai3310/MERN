const userModel = require("../models/userModel");
// Store hash in your password DB.
const bcrypt = require("bcryptjs");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({email})
    console.log('user',user );

    if(user){
      throw new Error("Alerdy user exits")
    }

    if (!email) {
      throw new Error("Please provide Email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("something is wrong");
    }

    const payload = {
      ...req.body,
      password: hashPassword,
    };

    const userData = new userModel(req.body);
    const saveUser = userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}


module.exports = userSignUpController