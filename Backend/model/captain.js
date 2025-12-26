const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 charater']
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be at least 3 charater']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Your gmail must be at least 5 charater']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketID: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        colour: {
            type: String,
            required: true,
            minlength: [3, 'Colour must be 3 charater long']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be 3 charater long']
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'Capacity must be at least one']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        },
    },
    location: {
        lat: {
            type: Number
        },
        lon: {
            type: Number
        }
    }

});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24d' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModule = mongoose.model('captain', captainSchema);

module.exports = captainModule;