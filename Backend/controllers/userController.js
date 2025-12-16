const userMOdel = require('../model/user');
const userService = require('../services/userServices');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body;
    const userAlreadyExsist = await userMOdel.findOne({ email });
    if (userAlreadyExsist) {
        res.status(400).json({ message: 'User already exsist' });
    }
    const hashPassword = await userMOdel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    });
    console.log("Your Registion is Sucessfully Completed")
    const token = user.genarateAuthToken();
    res.status(201).json(token, user);
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await userMOdel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: "Invalid Password or Email" });
    }
    const isMatch = await (user.comparePassword(password));
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid Password or Email" });
    }
    const token = user.genarateAuthToken();
    console.log("Login Sucessfully");
    res.status(200).json({ token, user });
}