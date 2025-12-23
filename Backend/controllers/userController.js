const userModel = require('../model/user');
const userService = require('../services/userServices');
const { validationResult } = require('express-validator');
const blacklistToken = require('../model/blacklistToken');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
    const { fullname, email, password } = req.body;
    const userAlreadyExsist = await userModel.findOne({ email });
    if (userAlreadyExsist) {
        res.status(400).json({ message: 'User already exsist' });
    }
    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    });
    console.log("Your Registion is Sucessfully Completed")
    const token = user.genarateAuthToken();
    console.log('Login Sucessfully');
    res.cookie('token', token);
    res.status(200).json({ token: token, user: user });
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: "Invalid Password or Email" });
    }
    const isMatch = await (user.comparePassword(password));
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid Password or Email" });
    }
    const token = user.genarateAuthToken();
    console.log('Login Sucessfully');
    res.cookie('token', token);
    res.status(200).json({ token: token, user: user });
}

module.exports.getUserProfile = async (req, res, next) => {
    try {
        res.status(200).json({ user: req.user });
    } catch {
        console.log(err);
        res.status(500).json({message: 'Can not fatch user profile'})
    }
}

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistToken.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}