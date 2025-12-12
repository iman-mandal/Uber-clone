const userMOdel = require('../model/user');
const userService = require('../services/userServices');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body;
    const hashPassword = await userMOdel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname, 
        email, 
        password: hashPassword
    });
    console.log("Your Registion is Sucessfully Completed")
    const token= user.genarateAuthToken();
    res.status(201).json(token,user);
}