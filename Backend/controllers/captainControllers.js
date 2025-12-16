const captainModel = require('../model/captain');
const captainService = require('../services/captainServices');
const { validationResult } = require('express-validator');

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
    return res.status(201).json(captain , token);
}