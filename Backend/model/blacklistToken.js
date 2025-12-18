const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 24*60*60*30 // Token will be removed after 30 days 
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);