const captainModule = require('../model/captain');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, colour, plate, capacity, vehicleType
}) => {
    if (!firstname || !lastname || !email || !password || !colour ||
        !plate || !capacity || !vehicleType) {
            throw new Error('All fields are require');
    }
    const captain=captainModule.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            colour,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
}