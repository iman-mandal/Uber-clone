const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First Name must be atleast 3 charaters']
        }, lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must be atlest 3 charaters']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlenght: [5, 'Your gmail must be atlest 5 charater']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketID: {
        type: String
    }
});

UserSchema.methods.genarateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, }, process.env.JWT_SECRET, { expiresIn: '24d' });
    return token;
}

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

UserSchema.statics.hashPassword=async function (password) {
    return await bcrypt.hash(password,10);
}

const userMOdel=mongoose.model('user',UserSchema);

module.exports = userMOdel;