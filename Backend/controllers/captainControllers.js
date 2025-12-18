const captainModel = require('../model/captain');
const captainService = require('../services/captainServices');
const { validationResult } = require('express-validator');
const blacklistToken=require('../model/blacklistToken');

// Register Captain controller
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const isCaptainAlreadyExsist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExsist) {
        return res.status(401).json({ message: 'Captain is already exsist' });
    }
    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        colour: vehicle.colour,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    console.log('Captain registation sucessfully');
    const token = captain.generateAuthToken();
    console.log('Token:', token);
    return res.status(201).json(captain, token);
}

// Login Captain controller
module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email and password' });
    }
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken();
    console.log('Token :', token);
    console.log('Login Sucessfully');
    res.cookie('token', token);
    res.status(200).json({ token: token, captain: captain });
}

// Get Captain Profile controller
module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        res.status(200).json({ captain: req.captain });
    } catch (err) {
        console.log(err);
    }
}

// Logout Captain controller
module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blacklistToken.create({ token });

    res.clearCookie('token');

    res.status(200).json({ message: 'Logout successfully' });
}